import { renderHook, act } from '@testing-library/react-hooks';
import useCVData from '../../hooks/useCVData';

describe('useCVData hook', () => {
  test('debe cargar los datos del JSON correctamente', async () => {
    let result;
    await act(async () => {
      result = renderHook(() => useCVData());
    });
    const { data, loading, error } = result.result.current;
    expect(loading).toBe(false);
    expect(error).toBeNull();
    expect(data).not.toBeNull();
  });

  test('debe retornar la sección personal', async () => {
    let result;
    await act(async () => {
      result = renderHook(() => useCVData());
    });
    const { data } = result.result.current;
    expect(data.personal).toBeDefined();
    expect(data.personal.name).toBe('Steven Jose');
  });

  test('debe retornar un array de experiencias', async () => {
    let result;
    await act(async () => {
      result = renderHook(() => useCVData());
    });
    const { data } = result.result.current;
    expect(Array.isArray(data.experience)).toBe(true);
    expect(data.experience.length).toBeGreaterThan(0);
  });

  test('la primera experiencia debe ser Mecalux', async () => {
    let result;
    await act(async () => {
      result = renderHook(() => useCVData());
    });
    const { data } = result.result.current;
    const mecalux = data.experience[0];
    expect(mecalux.company).toBe('Mecalux');
    expect(mecalux.current).toBe(true);
    expect(Array.isArray(mecalux.technologies)).toBe(true);
  });

  test('debe retornar un array de habilidades (skills)', async () => {
    let result;
    await act(async () => {
      result = renderHook(() => useCVData());
    });
    const { data } = result.result.current;
    expect(Array.isArray(data.skills)).toBe(true);
    expect(data.skills.length).toBeGreaterThan(0);
  });
});

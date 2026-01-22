# Typography Optimization Analysis - Case Study Pages

## Current Issues

### 1. Hero Title (H1)
- **Current**: `text-6xl md:text-[10vw] lg:text-[12vw] xl:text-[9vw]`
- **Problem**: 
  - 12vw на больших экранах (1920px) = ~230px - слишком большой
  - Нет максимального размера
  - Непредсказуемое поведение на разных экранах

### 2. Section Headers (H2)
- **Current**: `text-5xl md:text-[7vw] lg:text-[6.5vw] xl:text-[5vw]`
- **Problem**:
  - 7vw на больших экранах = ~134px - слишком большой
  - Конкурирует с hero заголовком

### 3. Subsection Headers (H3)
- **Current**: `text-3xl md:text-4xl xl:text-[3vw]`
- **Problem**:
  - 3vw на больших экранах = ~58px - может быть слишком большим

## Professional UX/UI Recommendations

### Typography Hierarchy Best Practices

1. **Clear Visual Hierarchy**: Разница между уровнями должна быть заметной, но не экстремальной
2. **Readability**: Заголовки должны быть читаемыми, но не доминировать над контентом
3. **Responsive Scaling**: Плавное масштабирование с ограничениями на больших экранах
4. **Consistent Spacing**: Правильные отступы между заголовками и контентом

### Recommended Sizes

#### Hero Title (H1)
- **Mobile**: 2.5rem (40px) - достаточно для мобильных
- **Tablet**: 3.5rem (56px)
- **Desktop**: 4rem (64px) - максимум
- **Large Desktop**: 4.5rem (72px) - максимум

#### Section Headers (H2)
- **Mobile**: 2rem (32px)
- **Tablet**: 2.5rem (40px)
- **Desktop**: 3rem (48px) - максимум
- **Large Desktop**: 3.5rem (56px) - максимум

#### Subsection Headers (H3)
- **Mobile**: 1.5rem (24px)
- **Tablet**: 1.75rem (28px)
- **Desktop**: 2rem (32px) - максимум
- **Large Desktop**: 2.25rem (36px) - максимум

### Implementation Strategy

Использовать `clamp()` для плавного масштабирования с ограничениями:
- `clamp(min, preferred, max)`
- Минимум для мобильных
- Предпочтительный размер (vw или rem)
- Максимум для больших экранов


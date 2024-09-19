## Технологии

- Next (with turbopack)
- Effector
- TailwindCSS
- Typescript
- ESLint
- Ban
- FSD

## Методология

Используется методология FSD.

### Правила

- Если сегмент состоит из одного файла, то нельзя создавать директорию под этот сегмент. [Пример](/src/shared/factory.ts)
- Разделение слов в наименованиях слайсов реализовывать через `-`.
- Запрещены экспорты поумолчанию, если этого не требует Next.
- Все компоненты должны реализовываться через стрелочные функции см. [Сниппеты](#сниппеты).

## Сниппеты


### rsc

```tsx
import React from 'react';

export const $TM_FILENAME_BASE$ = () => {
 return (
  <div>
   $END$
  </div>
 );
};

```

### rsi

```tsx
import React from 'react';

export const $TM_FILENAME_BASE$ = () => (
  <div>
    $END$
  </div>
);

```

### sep

```tsx

/* ===== $END$ ===== */

```

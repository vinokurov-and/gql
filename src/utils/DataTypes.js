/**
 * Проверка на объект
 * @param {*} obj Любой объект, строка, null и т.д.
 */
export const isObject = (obj) => typeof obj === 'object' && obj!==null

/**
 * Проверка на строку
 * @param {*} obj Любой объект, строка и т.д.
 */
export const isString = (obj) => typeof obj === 'string'
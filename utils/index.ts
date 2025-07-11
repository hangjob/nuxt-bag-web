/**
 * 扁平化嵌套对象为方括号表示法的键值对
 * @param obj 要扁平化的嵌套对象
 * @param parentKey 父级键名（内部递归使用）
 * @param result 累积结果对象（内部递归使用）
 * @returns 扁平化后的对象，键为方括号表示法
 */
export function flattenObject(
    obj: Record<string, unknown>,
    parentKey: string = '',
    result: Record<string, unknown> = {}
): Record<string, unknown> {
    for (const key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
            // 构建当前键名
            const currentKey = parentKey ? `${parentKey}[${key}]` : key;
            const value = obj[key];
            // 递归处理嵌套对象（排除数组和null）
            if (value && typeof value === 'object' && !Array.isArray(value)) {
                flattenObject(value as Record<string, unknown>, currentKey, result);
            } else {
                // 直接处理原始值、数组和null
                result[currentKey] = value;
            }
        }
    }
    return result;
}

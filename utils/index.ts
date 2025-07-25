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

export function linkPrefix(id: string) {
    return `/archives/${id}`
}

export function formatToK(value: any) {
    // 尝试将输入值转换为数字
    const num = typeof value === 'string'
        ? parseFloat(value.replace(/,/g, ''))
        : Number(value);

    // 处理无效输入的情况
    if (isNaN(num)) {
        return typeof value === 'string' ? value : String(value);
    }

    // 处理小于1000的情况
    if (Math.abs(num) < 1000) {
        // 保留最多两位小数
        const fixedNum = parseFloat(num.toFixed(2));
        return fixedNum.toString();
    }

    // 转换为k表示并保留两位小数
    const numInK = num / 1000;
    let formatted = parseFloat(numInK.toFixed(2)).toString();

    // 添加k后缀
    return formatted + 'k';
}

export function getCommunityResourceLevel(input: any) {
    // 转换为数字
    const score = typeof input === 'string'
        ? parseFloat(input.replace(/[^\d.]/g, ''))
        : Number(input);

    // 验证是否为有效数字且在范围内
    if (isNaN(score) || score < 10 || score > 100) {
        return {
            valid: false,
            error: "无效数据：请输入10~100之间的数值",
            originalInput: input
        };
    }

    // 资源程度描述配置
    const levels = [
        {
            range: [10, 30],
            levelName: "匮乏",
            terms: ["匮乏", "紧缺", "不足"],
            color: "#ff6b6b"  // 红色系
        },
        {
            range: [31, 50],
            levelName: "一般",
            terms: ["一般", "尚可", "基本满足"],
            color: "#ffd166"  // 黄色系
        },
        {
            range: [51, 70],
            levelName: "中等",
            terms: ["中等", "适度", "平衡"],
            color: "#06d6a0"  // 绿色系
        },
        {
            range: [71, 90],
            levelName: "丰富",
            terms: ["丰富", "充足", "良好"],
            color: "#118ab2"  // 蓝色系
        },
        {
            range: [91, 100],
            levelName: "充沛",
            terms: ["极丰富", "富足", "充沛"],
            color: "#073b4c"  // 深蓝色
        }
    ];

    // 查找匹配的级别
    const matchedLevel: any = levels.find(level =>
        score >= level.range[0] && score <= level.range[1]
    );

    // 返回完整对象
    return {
        valid: true,
        score: score,
        levelName: matchedLevel.levelName,
        term: matchedLevel.terms[Math.floor(Math.random() * matchedLevel.terms.length)],
        color: matchedLevel.color,
        range: matchedLevel.range,
        originalInput: input
    };
}

export function getComplexityPercentage(level: any) {
    const levelMap: any = {
        "简单": 10,
        "适度": 30,
        "中等": 50,
        "复杂": 70,
        "深度": 85,
        "专业": 100
    };

    const normalizedLevel: any = Object.keys(levelMap).find(
        key => key.toLowerCase() === String(level).toLowerCase().trim()
    );
    return levelMap[normalizedLevel] || 50;
}

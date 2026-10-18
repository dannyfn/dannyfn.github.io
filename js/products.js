(function (global) {
    "use strict";

    const products = {
        QC403: {
            model: "QC403",
            family: "手持 PDA",
            tier: "实用型",
            chip: "Qualcomm QCM2290",
            tagline: "轻量部署，可靠采集",
            summary: "触屏与实体数字键结合，面向基础仓储、门店盘点与快递收派的实用型采集终端。",
            highlights: ["专业二维扫码", "5000mAh 可拆卸电池", "IP65 工业防护"],
            scenarios: ["基础仓储", "门店盘点", "快递收派"],
            specs: {
                system: "Android 13",
                memory: "4GB + 64GB",
                display: "5.5 英寸，720 × 1440，触屏与实体数字键",
                network: "4G、双频 Wi-Fi、Bluetooth 5.0",
                scanning: "专业二维扫码，可选 NFC",
                battery: "5000mAh，可拆卸",
                protection: "IP65，1.2 米跌落"
            }
        },
        QC406: {
            model: "QC406",
            family: "手持 PDA",
            tier: "均衡型",
            chip: "Qualcomm SM6115",
            tagline: "坚固在手，作业顺畅。",
            summary: "SM6115 与 Android 15，结合 4G 连接、专业扫码和坚固机身，服务高频移动作业。",
            highlights: ["SM6115 八核性能", "Android 15 与 4G", "高性能二维扫码"],
            scenarios: ["高频仓储", "连锁零售", "生产制造"],
            specs: {
                system: "Android 15",
                memory: "6GB + 128GB",
                display: "6.0 英寸 FHD+",
                network: "4G、双频 Wi-Fi、Bluetooth 5.1、NFC",
                scanning: "高性能二维扫码引擎",
                battery: "5000mAh，可拆卸，支持快充",
                protection: "IP67，1.5 米跌落"
            }
        },
        QC408: {
            model: "QC408",
            family: "手持 PDA",
            tier: "旗舰型",
            chip: "Qualcomm QCM6490",
            tagline: "5G 旗舰，关键业务",
            summary: "为高强度物流、制造和医疗业务提供更快连接与更强计算能力。",
            highlights: ["5G 与 Wi-Fi 6E", "旗舰级复杂码识读", "可热插拔电池"],
            scenarios: ["智慧物流", "先进制造", "医疗移动业务"],
            specs: {
                system: "Android 14",
                memory: "8GB + 128GB，可选 256GB",
                display: "6.0 英寸 FHD+ 高亮屏",
                network: "5G、Wi-Fi 6E、Bluetooth 5.2、NFC",
                scanning: "旗舰级二维扫码，支持复杂条码",
                battery: "5000mAh，可热插拔，支持快充",
                protection: "IP68，1.5 米跌落"
            }
        },
        QC606: {
            model: "QC606",
            family: "工业平板",
            tier: "均衡型",
            chip: "Qualcomm SM6115",
            tagline: "宽阔视界，现场协同",
            summary: "10.1 英寸全高清工业平板，覆盖制造、维保和车载等多任务现场。",
            highlights: ["10.1 英寸 FHD", "8000mAh 大电池", "IP67 工业防护"],
            scenarios: ["生产制造", "设备维保", "车载作业"],
            specs: {
                system: "Android 13",
                memory: "6GB + 128GB",
                display: "10.1 英寸 FHD",
                network: "4G、双频 Wi-Fi、Bluetooth 5.1、NFC",
                scanning: "可选专业二维扫描模组",
                battery: "8000mAh，支持快充",
                protection: "IP67，1.2 米跌落"
            }
        }
    };

    global.QC_PRODUCTS = products;
})(typeof window !== "undefined" ? window : globalThis);

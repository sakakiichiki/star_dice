<script>
    // 資料定義
    const data = {
        recommendedProducts: {
            "牡羊座♈︎": ["貢布粉紅胡椒風味巧克力70%", "鹽之花風味黑巧克力70%"],
            "金牛座♉︎": ["深焙咖啡風味黑巧克力70%", "祕魯黑巧克力70%"],
            "雙子座♊︎": ["ORIGIN #1 黑巧克力70%", "祕魯黑巧克力100%"],
            "巨蟹座♋︎": ["祕魯牛奶巧克力50%", "紅烏龍牛奶巧克力50%", "台灣龍眼蜜香烏龍牛奶巧克力50%", "鹽之花風味黑巧克力70%"],
            "獅子座♌︎": ["輕焙咖啡風味黑巧克力70%", "貢布粉紅胡椒風味巧克力70%", "祕魯黑巧克力100%"],
            "處女座♍︎": ["大馬士革玫瑰黑巧克力70%", "台東洛神花白巧克力36%", "祕魯黑巧克力85%"],
            "天秤座♎︎": ["多明尼加黑巧克力70%", "台東洛神花白巧克力36%", "祕魯牛奶巧克力50%"],
            "天蠍座♏︎": ["台東洛神花白巧克力36%", "深焙咖啡風味黑巧克力70%", "祕魯黑巧克力85%"],
            "射手座♐︎": ["祕魯黑巧克力85%", "深焙咖啡風味黑巧克力70%", "台灣龍眼蜜香烏龍牛奶巧克力50%"],
            "摩羯座♑︎": ["祕魯黑巧克力85%", "台灣龍眼蜜香烏龍牛奶巧克力50%"],
            "水瓶座♒︎": ["輕焙咖啡風味黑巧克力70%", "祕魯黑巧克力100%"],
            "雙魚座♓︎": ["鹽之花風味黑巧克力70%", "多明尼加黑巧克力70%", "ORIGIN #1 黑巧克力70%", "大馬士革玫瑰黑巧克力70%"]
        },
        planetProducts: {
            "太陽☉": ["貢布粉紅胡椒風味巧克力70%"],
            "月亮☽︎": ["鹽之花風味黑巧克力70%"],
            "水星☿": ["輕焙咖啡風味黑巧克力70%", "台灣龍眼蜜香烏龍牛奶巧克力50%"],
            "金星♀": ["大馬士革玫瑰黑巧克力70%", "紅烏龍牛奶巧克力50%", "祕魯牛奶巧克力50%"],
            "火星♂": ["貢布粉紅胡椒風味巧克力70%", "深焙咖啡風味黑巧克力70%"],
            "木星♃": ["多明尼加黑巧克力70%"],
            "土星♄": ["祕魯黑巧克力85%", "深焙咖啡風味黑巧克力70%", "祕魯黑巧克力70%"],
            "天王星♅": ["祕魯黑巧克力100%"],
            "海王星♆": ["ORIGIN #1 黑巧克力70%"],
            "冥王星": ["台東洛神花白巧克力36%"]
        },
        suggestedProducts: {
            "女": ["大馬士革玫瑰黑巧克力70%", "台東洛神花白巧克力36%", "台灣龍眼蜜香烏龍牛奶巧克力50%", "紅烏龍牛奶巧克力50%", "祕魯牛奶巧克力50%", "祕魯黑巧克力100%", "祕魯黑巧克力85%", "貢布粉紅胡椒風味巧克力70%", "深焙咖啡風味黑巧克力70%", "輕焙咖啡風味黑巧克力70%", "鹽之花風味黑巧克力70%", "ORIGIN #1 黑巧克力70%"],
            "男": ["台灣龍眼蜜香烏龍牛奶巧克力50%", "多明尼加黑巧克力70%", "紅烏龍牛奶巧克力50%", "祕魯牛奶巧克力50%", "祕魯黑巧克力70%", "祕魯黑巧克力85%", "深焙咖啡風味黑巧克力70%", "鹽之花風味黑巧克力70%"]
        },
        houseSymbols: {
            "1": "自我特質",
            "2": "財運",
            "3": "溝通",
            "4": "親屬關係",
            "5": "慾望",
            "6": "外在群體",
            "7": "權利義務",
            "8": "一個階段的結束；階段獲得的結果",
            "9": "跨領域",
            "10": "事業",
            "11": "社會性",
            "12": "業力"
        },
        nodeEffects: {
            "北交點☊": "需要開發 ",
            "南交點☋": "應該捨棄 需要開發 "
        },
        oppositeSigns: {
            "牡羊座♈︎": "天秤座♎︎",
            "金牛座♉︎": "天蠍座♏︎",
            "雙子座♊︎": "射手座♐︎",
            "巨蟹座♋︎": "摩羯座♑︎",
            "獅子座♌︎": "水瓶座♒︎",
            "處女座♍︎": "雙魚座♓︎",
            "天秤座♎︎": "牡羊座♈︎",
            "天蠍座♏︎": "金牛座♉︎",
            "射手座♐︎": "雙子座♊︎",
            "摩羯座♑︎": "巨蟹座♋︎",
            "水瓶座♒︎": "獅子座♌︎",
            "雙魚座♓︎": "處女座♍︎"
        }
    };

    // 當表單選項改變時，更新查詢結果
    document.getElementById('selectionForm').addEventListener('change', function () {
        const constellation = document.getElementById('constellation').value;
        const planet = document.getElementById('planet').value;
        const gender = document.getElementById('gender').value;
        const position = document.getElementById('position').value;

        updateResults(constellation, planet, gender, position);
    });

    // 更新查詢結果的函數
    function updateResults(constellation, planet, gender, position) {
        // 清空原本的內容
        document.getElementById('nodeEffectList').innerHTML = '';
        document.getElementById('houseSymbolList').innerHTML = '';
        document.getElementById('recommendedProductsList').innerHTML = '';
        document.getElementById('suggestedProductsList').innerHTML = '';

        // 南北交點影響顯示邏輯
        if (planet === "北交點☊" && constellation) {
            document.getElementById('nodeEffectList').innerHTML = `<li>${data.nodeEffects["北交點☊"]} ${constellation}</li>`;
        } else if (planet === "南交點☋" && constellation) {
            // 根據對宮星座來顯示南交點的影響
            const oppositeSign = data.oppositeSigns[constellation];  // 獲取對宮星座
            document.getElementById('nodeEffectList').innerHTML = `<li>應該捨棄 ${constellation} 需要開發 ${oppositeSign}</li>`;


        }

        // 宮位象徵
        if (position && data.houseSymbols[position]) {
            document.getElementById('houseSymbolList').innerHTML = `<li>${data.houseSymbols[position]}</li>`;
        }

        // 建議商品
        const suggestedProducts = gender && data.suggestedProducts[gender] ? data.suggestedProducts[gender] : [];
        suggestedProducts.forEach(item => {
            document.getElementById('suggestedProductsList').innerHTML += `<li>${item}</li>`;
        });

        // 推薦商品邏輯：顯示星座和星球的商品，並去重顯示唯一商品
        let recommendedItems = [];

        // 如果星座和星球都被選擇，將兩者的商品合併並去重
        if (constellation && planet) {
            // 如果是南交點☋，只顯示對宮星座的商品
            if (planet === "南交點☋") {
                const oppositeSign = data.oppositeSigns[constellation];  // 根據對宮星座選擇商品
                recommendedItems = data.recommendedProducts[oppositeSign] || [];
                // 使用 Set 去重
                recommendedItems = [...new Set(recommendedItems)];
            } else {
                let constellationProducts = data.recommendedProducts[constellation] || [];
                let planetProducts = data.planetProducts[planet] || [];

                // 合併並去重，使用 Set 去重
                recommendedItems = [...new Set([...constellationProducts, ...planetProducts])];
            }
        } 
        // 如果只有星座選擇
        else if (constellation) {
            recommendedItems = data.recommendedProducts[constellation] || [];
        } 
        // 如果只有星球選擇
        else if (planet) {
            recommendedItems = data.planetProducts[planet] || [];
        }

        // 顯示商品，且若與建議商品重複，顯示紅色
        recommendedItems.forEach(item => {
            const isDuplicate = suggestedProducts.includes(item);
            const listItem = `<li style="color: ${isDuplicate ? 'red' : 'black'};">${item}</li>`;
            document.getElementById('recommendedProductsList').innerHTML += listItem;
        });
    }
</script>

import { ArmsConfig, Arms } from "../servers/scene/Res/Arms";
import { ClothesConfig, Clothes } from "../servers/scene/Res/Clothes";
import { HelmetConfig, Helmet } from "../servers/scene/Res/Helmet";
import { JewelryConfig, Jewelry } from "../servers/scene/Res/Jewelry";
import { NecklaceConfig, Necklace } from "../servers/scene/Res/Necklace";
import { ShoesConfig, Shoes } from "../servers/scene/Res/Shoes";
import { DrugConfig, Drug } from "../servers/scene/Res/Drug";
import { SkillBookConfig, SkillBook } from "../servers/scene/Res/SkillBook";
import { Res } from "../servers/scene/Res/Res";
import { PetConfig } from "../servers/scene/base/Pet";

export class ResConfig {

    public static arms_knife_list:ArmsConfig[] = [ ////////////武器
        {name:'龙麟',physics_attack:100,magic_attack:0,has_blood:50,has_magic:50,arms_type:'knife'},
        {name:'工布',physics_attack:300,magic_attack:0,has_blood:150,has_magic:50,arms_type:'knife'},
        {name:'七圣',physics_attack:500,magic_attack:0,has_blood:250,has_magic:50,arms_type:'knife'},
        {name:'冷艳锯',physics_attack:500,magic_attack:0,has_blood:250,has_magic:50,arms_type:'knife'},
        {name:'青龙偃月刀',physics_attack:500,magic_attack:0,has_blood:250,has_magic:50,arms_type:'knife'},
        {name:'断魂血镰',physics_attack:500,magic_attack:0,has_blood:250,has_magic:50,arms_type:'knife'},
        {name:'皇龙偃月刀',physics_attack:500,magic_attack:0,has_blood:250,has_magic:50,arms_type:'knife'},
    ]

    public static arms_staff_list:ArmsConfig[] = [ ////////////武器
        {name:'青玉镇邪杖',physics_attack:0,magic_attack:100,has_blood:50,has_magic:50,arms_type:'staff'},
        {name:'灵山炼气杖',physics_attack:0,magic_attack:300,has_blood:50,has_magic:150,arms_type:'staff'},
        {name:'玄天破邪杖',physics_attack:0,magic_attack:500,has_blood:50,has_magic:250,arms_type:'staff'},
    ]

    public static arms_stick_list:ArmsConfig[] = [ ////////////武器
        {name:'齐眉棍',physics_attack:0,magic_attack:100,has_blood:50,has_magic:50,arms_type:'stick'},
        {name:'水火棍',physics_attack:0,magic_attack:400,has_blood:150,has_magic:150,arms_type:'stick'},
        {name:'侠少棍',physics_attack:0,magic_attack:600,has_blood:250,has_magic:250,arms_type:'stick'},
        {name:'四平棍',physics_attack:0,magic_attack:600,has_blood:250,has_magic:250,arms_type:'stick'},
        {name:'普度棍',physics_attack:0,magic_attack:600,has_blood:250,has_magic:250,arms_type:'stick'},
        {name:'鹤舞棍',physics_attack:0,magic_attack:600,has_blood:250,has_magic:250,arms_type:'stick'},
        {name:'分水棍',physics_attack:0,magic_attack:600,has_blood:250,has_magic:250,arms_type:'stick'},
        {name:'潜龙棍',physics_attack:0,magic_attack:600,has_blood:250,has_magic:250,arms_type:'stick'},
        {name:'紫金梁',physics_attack:0,magic_attack:600,has_blood:250,has_magic:250,arms_type:'stick'},
        {name:'打狗棒',physics_attack:0,magic_attack:600,has_blood:250,has_magic:250,arms_type:'stick'},
        {name:'紧那罗棒',physics_attack:0,magic_attack:600,has_blood:250,has_magic:250,arms_type:'stick'},
        {name:'天蛇棍',physics_attack:0,magic_attack:600,has_blood:250,has_magic:250,arms_type:'stick'},
        {name:'青龙棍',physics_attack:0,magic_attack:600,has_blood:250,has_magic:250,arms_type:'stick'},
    ]

    public static  clothes_list:ClothesConfig[] = [ ///////衣服
        {name:'守护之铠',blood_limit:100,magic_limit:100,physics_defense:300,magic_defense:100,has_physics_attack:100,has_magic_attack:0},
        {name:'镜芒铠',blood_limit:200,magic_limit:200,physics_defense:400,magic_defense:0,has_physics_attack:200,has_magic_attack:0},
        {name:'圣痕之铠',blood_limit:300,magic_limit:200,physics_defense:100,magic_defense:300,has_physics_attack:100,has_magic_attack:100},
        {name:'奇迹庇佑',blood_limit:400,magic_limit:400,physics_defense:100,magic_defense:500,has_physics_attack:0,has_magic_attack:200},
        {name:'龙麟铠甲',blood_limit:500,magic_limit:500,physics_defense:200,magic_defense:200,has_physics_attack:100,has_magic_attack:100},
        {name:'祭祀血袍',blood_limit:600,magic_limit:600,physics_defense:900,magic_defense:0,has_physics_attack:800,has_magic_attack:0},
        {name:'暗血冥袍',blood_limit:800,magic_limit:800,physics_defense:0,magic_defense:800,has_physics_attack:0,has_magic_attack:800},
        {name:'魔导之魂',blood_limit:900,magic_limit:900,physics_defense:400,magic_defense:600,has_physics_attack:400,has_magic_attack:200},
        {name:'和谐之舞',blood_limit:1000,magic_limit:1000,physics_defense:500,magic_defense:500,has_physics_attack:800,has_magic_attack:0},
        {name:'真理圣袍',blood_limit:2000,magic_limit:2000,physics_defense:900,magic_defense:300,has_physics_attack:500,has_magic_attack:1000},
    ]

    public static  helmet_list:HelmetConfig[] = [//////////头盔
        {name:'九耀御雷',blood_limit:100,magic_limit:100,physics_defense:200,magic_defense:200,has_physics_attack:100,has_magic_attack:0},
        {name:'冥虹镜芒',blood_limit:200,magic_limit:100,physics_defense:100,magic_defense:300,has_physics_attack:0,has_magic_attack:100},
        {name:'龙翼圣痕',blood_limit:300,magic_limit:200,physics_defense:200,magic_defense:300,has_physics_attack:100,has_magic_attack:100},
        {name:'恐惧首级',blood_limit:400,magic_limit:400,physics_defense:300,magic_defense:300,has_physics_attack:200,has_magic_attack:0},
        {name:'噩梦之首',blood_limit:500,magic_limit:500,physics_defense:1000,magic_defense:0,has_physics_attack:0,has_magic_attack:1000},
        {name:'魔海诱惑',blood_limit:600,magic_limit:600,physics_defense:400,magic_defense:500,has_physics_attack:800,has_magic_attack:0},
        {name:'银月清歌',blood_limit:700,magic_limit:700,physics_defense:500,magic_defense:800,has_physics_attack:100,has_magic_attack:900},
        {name:'轻羽流星',blood_limit:800,magic_limit:1000,physics_defense:400,magic_defense:1500,has_physics_attack:0,has_magic_attack:1000},
        {name:'远古迷梦',blood_limit:2000,magic_limit:100,physics_defense:500,magic_defense:600,has_physics_attack:1500,has_magic_attack:0},
    ]

    public static  jewelry_list:JewelryConfig[] = [//////////首饰
        {name:'碧血手镯',blood_limit:100,magic_limit:100,physics_attack:100,magic_attack:100,physics_defense:100,magic_defense:100,speed:50,has_physics_attack:100,has_magic_attack:0},
        {name:'鹰眼手镯',blood_limit:200,magic_limit:200,physics_attack:200,magic_attack:200,physics_defense:300,magic_defense:200,speed:100,has_physics_attack:0,has_magic_attack:100},
        {name:'辉煌手镯',blood_limit:400,magic_limit:200,physics_attack:600,magic_attack:200,physics_defense:700,magic_defense:200,speed:100,has_physics_attack:0,has_magic_attack:100},
        {name:'庇护手镯',blood_limit:400,magic_limit:700,physics_attack:600,magic_attack:600,physics_defense:400,magic_defense:400,speed:200,has_physics_attack:0,has_magic_attack:100},
        {name:'烈焰永恒',blood_limit:600,magic_limit:700,physics_attack:600,magic_attack:600,physics_defense:600,magic_defense:600,speed:200,has_physics_attack:500,has_magic_attack:0},
        {name:'紫电风暴',blood_limit:700,magic_limit:800,physics_attack:700,magic_attack:700,physics_defense:700,magic_defense:700,speed:200,has_physics_attack:600,has_magic_attack:0},
        {name:'迷幻魔影',blood_limit:800,magic_limit:800,physics_attack:800,magic_attack:800,physics_defense:800,magic_defense:800,speed:200,has_physics_attack:800,has_magic_attack:0},
        {name:'幻蓝天霞',blood_limit:900,magic_limit:900,physics_attack:900,magic_attack:900,physics_defense:900,magic_defense:900,speed:200,has_physics_attack:0,has_magic_attack:0},
        {name:'深蓝传说',blood_limit:1000,magic_limit:1000,physics_attack:1000,magic_attack:1000,physics_defense:1000,magic_defense:1000,speed:200,has_physics_attack:0,has_magic_attack:0},
        {name:'凤翼天宇',blood_limit:1100,magic_limit:1100,physics_attack:1100,magic_attack:1100,physics_defense:1100,magic_defense:1100,speed:200,has_physics_attack:0,has_magic_attack:0},
    ]

    public static  necklace_list:NecklaceConfig[] = [/////////项链
        {name:'恶鬼',blood_limit:100,magic_limit:100,physics_attack:100,magic_attack:100,physics_defense:100,magic_defense:100,speed:10,has_physics_attack:100,has_magic_attack:0},
        {name:'狂暴',blood_limit:200,magic_limit:200,physics_attack:200,magic_attack:200,physics_defense:100,magic_defense:100,speed:10,has_physics_attack:100,has_magic_attack:0},
        {name:'水神',blood_limit:300,magic_limit:300,physics_attack:300,magic_attack:300,physics_defense:300,magic_defense:300,speed:10,has_physics_attack:0,has_magic_attack:100},
        {name:'真理',blood_limit:400,magic_limit:400,physics_attack:400,magic_attack:400,physics_defense:400,magic_defense:400,speed:10,has_physics_attack:0,has_magic_attack:100},
        {name:'赤心',blood_limit:500,magic_limit:500,physics_attack:500,magic_attack:500,physics_defense:500,magic_defense:500,speed:10,has_physics_attack:0,has_magic_attack:100},
        {name:'黑月',blood_limit:600,magic_limit:600,physics_attack:600,magic_attack:600,physics_defense:600,magic_defense:600,speed:10,has_physics_attack:0,has_magic_attack:100},
        {name:'辉煌',blood_limit:1300,magic_limit:300,physics_attack:300,magic_attack:300,physics_defense:300,magic_defense:300,speed:10,has_physics_attack:0,has_magic_attack:0},
        {name:'月石',blood_limit:2300,magic_limit:300,physics_attack:300,magic_attack:300,physics_defense:300,magic_defense:300,speed:10,has_physics_attack:0,has_magic_attack:0},
        {name:'火焰项链',blood_limit:3300,magic_limit:300,physics_attack:300,magic_attack:300,physics_defense:300,magic_defense:300,speed:10,has_physics_attack:0,has_magic_attack:0},
        {name:'帝王项链',blood_limit:300,magic_limit:2300,physics_attack:300,magic_attack:300,physics_defense:300,magic_defense:300,speed:10,has_physics_attack:0,has_magic_attack:0},
        {name:'永恒之链',blood_limit:300,magic_limit:3300,physics_attack:300,magic_attack:300,physics_defense:300,magic_defense:300,speed:10,has_physics_attack:0,has_magic_attack:0},
        {name:'凝泪微华',blood_limit:300,magic_limit:4300,physics_attack:300,magic_attack:300,physics_defense:300,magic_defense:300,speed:10,has_physics_attack:0,has_magic_attack:0},
        {name:'时空之轮',blood_limit:2300,magic_limit:2300,physics_attack:300,magic_attack:300,physics_defense:300,magic_defense:300,speed:10,has_physics_attack:0,has_magic_attack:0},
        {name:'混沌之链',blood_limit:3300,magic_limit:2300,physics_attack:300,magic_attack:300,physics_defense:300,magic_defense:300,speed:10,has_physics_attack:0,has_magic_attack:0},
    ]

    public static  shoes_list:ShoesConfig[] = [///////////鞋子
        {name:'辉煌圣靴',blood_limit:100,magic_limit:100,speed:50,physics_defense:100,magic_defense:100,has_physics_attack:100,has_magic_attack:0},
        {name:'神明战靴',blood_limit:200,magic_limit:200,speed:50,physics_defense:100,magic_defense:100,has_physics_attack:100,has_magic_attack:0},
        {name:'寒光圣靴',blood_limit:300,magic_limit:300,speed:50,physics_defense:100,magic_defense:100,has_physics_attack:0,has_magic_attack:100},
        {name:'光辉奇迹',blood_limit:400,magic_limit:400,speed:100,physics_defense:100,magic_defense:100,has_physics_attack:0,has_magic_attack:100},
        {name:'银澜月华',blood_limit:500,magic_limit:500,speed:100,physics_defense:100,magic_defense:100,has_physics_attack:0,has_magic_attack:100},
        {name:'龙神御风',blood_limit:600,magic_limit:600,speed:100,physics_defense:100,magic_defense:100,has_physics_attack:0,has_magic_attack:100},
        {name:'虚幻圆舞',blood_limit:700,magic_limit:700,speed:100,physics_defense:100,magic_defense:100,has_physics_attack:0,has_magic_attack:0},
        {name:'碧波万里',blood_limit:800,magic_limit:800,speed:100,physics_defense:100,magic_defense:100,has_physics_attack:0,has_magic_attack:0},
        {name:'清风之拂',blood_limit:900,magic_limit:900,speed:100,physics_defense:100,magic_defense:100,has_physics_attack:0,has_magic_attack:0},
        {name:'转瞬千年',blood_limit:1000,magic_limit:1000,speed:100,physics_defense:100,magic_defense:100,has_physics_attack:0,has_magic_attack:0},
    ]

    public static  drug_list:DrugConfig[] = [////////////药品
        {name:'止血草',blood:100,magic:0,effect_name:'',explain:''},
        {name:'大补丸',blood:200,magic:0,effect_name:'',explain:''},
        {name:'黑玉断续膏',blood:200,magic:200,effect_name:'',explain:''},
        {name:'千年灵芝',blood:400,magic:0,effect_name:'',explain:''},
        {name:'首阳参',blood:500,magic:0,effect_name:'',explain:''},
        {name:'百草丹',blood:600,magic:0,effect_name:'',explain:''},
        {name:'定魂丹',blood:700,magic:0,effect_name:'',explain:''},
        {name:'大西瓜',blood:800,magic:0,effect_name:'',explain:''},
        {name:'万年雪霜',blood:1000,magic:1000,effect_name:'',explain:''},
        {name:'千年雪霜',blood:2000,magic:2000,effect_name:'',explain:''},
        {name:'包子',blood:3000,magic:0,effect_name:'',explain:''},
        {name:'大包子',blood:4000,magic:0,effect_name:'',explain:''},
        {name:'金创药',blood:5000,magic:0,effect_name:'',explain:''},
        {name:'超级金创药',blood:6000,magic:0,effect_name:'',explain:''},
        {name:'灵引咒',blood:0,magic:0,effect_name:'CallPet',explain:'召唤一只骷髅为你战斗。',pet_config:{name:'骷髅',blood:5000,magic:100,blood_limit:5100,magic_limit:100,physics_attack:500,magic_attack:0,physics_defense:50,magic_defense:20,life_time:1000,cd_time:1}},
        {name:'化魂咒',blood:0,magic:0,effect_name:'CallPet',explain:'召唤一只麒麟为你战斗。',pet_config:{name:'麒麟',blood:8000,magic:100,blood_limit:8100,magic_limit:100,physics_attack:1000,magic_attack:0,physics_defense:50,magic_defense:20,life_time:1000,cd_time:1}},
        {name:'飞仙咒',blood:0,magic:0,effect_name:'CallPet',explain:'召唤一只哮天犬为你战斗。',pet_config:{name:'哮天犬',blood:10000,magic:100,blood_limit:10000,magic_limit:100,physics_attack:1500,magic_attack:0,physics_defense:50,magic_defense:20,life_time:1000,cd_time:1}},
    ]

    public static  skillBook_list:SkillBookConfig[] = [////////////技能书
        {name:'烈火',blood:0,magic:0,consume_magic:0,cd:2,effect_name:'RagingFire',explain:'烈火',arms_limit:"knife",effect_config:{name:'烈火',attack_l:1,range_l:1,type:'attack'}},
        {name:'狂风斩',blood:0,magic:0,consume_magic:0,cd:2,effect_name:'FierceWind',explain:'狂风斩',arms_limit:"knife",effect_config:{name:'狂风斩',attack_l:3,range_l:3,type:'attack'}},
        {name:'逐日剑法',blood:0,magic:0,consume_magic:0,cd:2,effect_name:'PursueSun',explain:'逐日剑法',arms_limit:"knife",effect_config:{name:'逐日剑法',attack_l:4,range_l:4,type:'attack'}},
        {name:'冰咆哮',blood:0,magic:0,consume_magic:0,cd:3,effect_name:'Hailstorm',explain:'冰咆哮',arms_limit:"staff",effect_config:{name:'冰咆哮',attack_l:13,range_l:5,type:'attack'}},
        {name:'流星火雨',blood:0,magic:0,consume_magic:0,cd:3,effect_name:'MeteorSwarm',explain:'流星火雨',arms_limit:'staff',effect_config:{name:'流星火雨',attack_l:16,range_l:6,type:'attack'}},
        {name:'灭天火',blood:0,magic:0,consume_magic:0,cd:3,effect_name:'SkyFire',explain:'灭天火',arms_limit:'staff',effect_config:{name:'灭天火',attack_l:19,range_l:1,type:'attack'}},
        {name:'噬血术',blood:0,magic:0,consume_magic:0,cd:4,effect_name:'Hemophagy',explain:'噬血术',arms_limit:'stick',effect_config:{name:'噬血术',attack_l:19,range_l:1,type:'attack'}},
        {name:'治愈术',blood:0,magic:0,consume_magic:0,cd:4,effect_name:'Cure',explain:'治愈术',arms_limit:'stick',effect_config:{name:'治愈术',attack_l:1,range_l:1,type:'assist',continue_time:100,add_continue_blood:20,add_continue_magic:0}},
        {name:'灵引符',blood:0,magic:0,consume_magic:0,cd:10,effect_name:'CallPet',explain:'召唤一只骷髅为你战斗。',arms_limit:'stick',pet_config:{name:'骷髅',blood:100,magic:100,blood_limit:100,magic_limit:100,physics_attack:100,magic_attack:0,physics_defense:50,magic_defense:20,life_time:200,cd_time:1}},
        {name:'化魂符',blood:0,magic:0,consume_magic:0,cd:10,effect_name:'CallPet',explain:'召唤一只麒麟为你战斗。',arms_limit:'stick',pet_config:{name:'麒麟',blood:300,magic:300,blood_limit:300,magic_limit:300,physics_attack:150,magic_attack:0,physics_defense:50,magic_defense:20,life_time:200,cd_time:1}},
        {name:'飞仙符',blood:0,magic:0,consume_magic:0,cd:10,effect_name:'CallPet',explain:'召唤一只哮天犬为你战斗。',arms_limit:'stick',pet_config:{name:'哮天犬',blood:500,magic:500,blood_limit:500,magic_limit:500,physics_attack:200,magic_attack:0,physics_defense:50,magic_defense:20,life_time:200,cd_time:1}},
    ]

    public static monster_list:PetConfig[] = [//////////// 怪物
        {name:'抓猫',blood:100,magic:100,blood_limit:100,magic_limit:100,physics_attack:100,magic_attack:0,physics_defense:50,magic_defense:20,life_time:100,cd_time:1},
        {name:'鸡',blood:200,magic:200,blood_limit:200,magic_limit:200,physics_attack:200,magic_attack:0,physics_defense:50,magic_defense:20,life_time:500,cd_time:1},
        {name:'稻草人',blood:300,magic:300,blood_limit:300,magic_limit:300,physics_attack:300,magic_attack:0,physics_defense:50,magic_defense:20,life_time:500,cd_time:1},
        {name:'钉耙猫',blood:400,magic:400,blood_limit:400,magic_limit:400,physics_attack:400,magic_attack:0,physics_defense:50,magic_defense:20,life_time:500,cd_time:1},
        {name:'绿野人',blood:500,magic:500,blood_limit:500,magic_limit:500,physics_attack:500,magic_attack:0,physics_defense:50,magic_defense:20,life_time:500,cd_time:1},
        {name:'刀骷髅',blood:600,magic:600,blood_limit:600,magic_limit:600,physics_attack:600,magic_attack:0,physics_defense:50,magic_defense:20,life_time:500,cd_time:1},
    ]

    constructor() {
    }

    /////////////随机获得一个怪物配置
    public static get_random_monster():PetConfig {
        let monster_list:PetConfig[] = ResConfig.monster_list;
        let rnd = Math.floor(Math.random() * monster_list.length);
        let monster_config:PetConfig = monster_list[rnd];
        return monster_config;
    }

    ////////////获得一个随机物品（生成随机物品）
    public static get_random_res(rnd_dec:number = 0):Res {
        let rnd:number = Math.ceil(Math.random()*10);
        // rnd = 10;
        if (rnd == 1) {
            let arms_knife_list:ArmsConfig[] = ResConfig.arms_knife_list;
            rnd = Math.floor(Math.random() * arms_knife_list.length);
            if(rnd_dec >= 1)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 2)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 3)rnd = Math.floor(Math.random() * (rnd + 1));
            let arms_config:ArmsConfig = arms_knife_list[rnd];
            return new Arms(arms_config);
        }else if (rnd == 2) {
            let arms_staff_list:ArmsConfig[] = ResConfig.arms_staff_list;
            rnd = Math.floor(Math.random() * arms_staff_list.length);
            if(rnd_dec >= 1)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 2)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 3)rnd = Math.floor(Math.random() * (rnd + 1));
            let arms_config:ArmsConfig = arms_staff_list[rnd];
            return new Arms(arms_config);
        }else if (rnd == 3) {
            let arms_stick_list:ArmsConfig[] = ResConfig.arms_stick_list;
            rnd = Math.floor(Math.random() * arms_stick_list.length);
            if(rnd_dec >= 1)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 2)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 3)rnd = Math.floor(Math.random() * (rnd + 1));
            let arms_config:ArmsConfig = arms_stick_list[rnd];
            return new Arms(arms_config);
        }else if (rnd == 4) {
            let clothes_list:ClothesConfig[] = ResConfig.clothes_list;
            rnd = Math.floor(Math.random() * clothes_list.length);
            if(rnd_dec >= 1)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 2)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 3)rnd = Math.floor(Math.random() * (rnd + 1));
            let config:ClothesConfig = clothes_list[rnd];
            return new Clothes(config);
        }else if (rnd == 5) {
            let helmet_list:HelmetConfig[] = ResConfig.helmet_list;
            rnd = Math.floor(Math.random() * helmet_list.length);
            if(rnd_dec >= 1)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 2)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 3)rnd = Math.floor(Math.random() * (rnd + 1));
            let config:HelmetConfig = helmet_list[rnd];
            return new Helmet(config);
        }else if (rnd == 6) {
            let jewelry_list:JewelryConfig[] = ResConfig.jewelry_list;
            rnd = Math.floor(Math.random() * jewelry_list.length);
            if(rnd_dec >= 1)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 2)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 3)rnd = Math.floor(Math.random() * (rnd + 1));
            let config:JewelryConfig = jewelry_list[rnd];
            return new Jewelry(config);
        }else if (rnd == 7) {
            let necklace_list:NecklaceConfig[] = ResConfig.necklace_list;
            rnd = Math.floor(Math.random() * necklace_list.length);
            if(rnd_dec >= 1)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 2)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 3)rnd = Math.floor(Math.random() * (rnd + 1));
            let config:NecklaceConfig = necklace_list[rnd];
            return new Necklace(config);
        }else if (rnd == 8) {
            let  shoes_list:ShoesConfig[] = ResConfig.shoes_list;
            rnd = Math.floor(Math.random() * shoes_list.length);
            if(rnd_dec >= 1)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 2)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 3)rnd = Math.floor(Math.random() * (rnd + 1));
            let config:ShoesConfig = shoes_list[rnd];
            return new Shoes(config);
        }else if (rnd == 9) {
            let  drug_list:DrugConfig[] = ResConfig.drug_list;
            rnd = Math.floor(Math.random() * drug_list.length);
            if(rnd_dec >= 1)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 2)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 3)rnd = Math.floor(Math.random() * (rnd + 1));
            let config:DrugConfig = drug_list[rnd];
            return new Drug(config);
        }else if (rnd == 10) {
            let  skillBook_list:SkillBookConfig[] = ResConfig.skillBook_list;
            rnd = Math.floor(Math.random() * skillBook_list.length);
            if(rnd_dec >= 1)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 2)rnd = Math.floor(Math.random() * (rnd + 1));
            if(rnd_dec >= 3)rnd = Math.floor(Math.random() * (rnd + 1));
            let config:SkillBookConfig = skillBook_list[rnd];
            return new SkillBook(config);
        }
    }

}

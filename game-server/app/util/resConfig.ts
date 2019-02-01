import { ArmsConfig } from "../servers/scene/Res/Arms";
import { ClothesConfig } from "../servers/scene/Res/Clothes";
import { HelmetConfig } from "../servers/scene/Res/Helmet";
import { JewelryConfig } from "../servers/scene/Res/Jewelry";
import { NecklaceConfig } from "../servers/scene/Res/Necklace";
import { ShoesConfig } from "../servers/scene/Res/Shoes";
import { DrugConfig } from "../servers/scene/Res/Drug";
import { SkillBookConfig } from "../servers/scene/Res/SkillBook";


let arms_knife_list:ArmsConfig[] = [ ////////////武器
    {name:'龙麟',physics_attack:100,magic_attack:0,has_blood:50,has_magic:50,arms_type:'knife'},
    {name:'工布',physics_attack:300,magic_attack:0,has_blood:150,has_magic:50,arms_type:'knife'},
    {name:'七圣',physics_attack:500,magic_attack:0,has_blood:250,has_magic:50,arms_type:'knife'},
    {name:'冷艳锯',physics_attack:500,magic_attack:0,has_blood:250,has_magic:50,arms_type:'knife'},
    {name:'青龙偃月刀',physics_attack:500,magic_attack:0,has_blood:250,has_magic:50,arms_type:'knife'},
    {name:'断魂血镰',physics_attack:500,magic_attack:0,has_blood:250,has_magic:50,arms_type:'knife'},
    {name:'皇龙偃月刀',physics_attack:500,magic_attack:0,has_blood:250,has_magic:50,arms_type:'knife'},
]

let arms_staff_list:ArmsConfig[] = [ ////////////武器
    {name:'青玉镇邪杖',physics_attack:0,magic_attack:100,has_blood:50,has_magic:50,arms_type:'staff'},
    {name:'灵山炼气杖',physics_attack:0,magic_attack:300,has_blood:50,has_magic:150,arms_type:'staff'},
    {name:'玄天破邪杖',physics_attack:0,magic_attack:500,has_blood:50,has_magic:250,arms_type:'staff'},
]

let arms_stick_list:ArmsConfig[] = [ ////////////武器
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

let clothes_list:ClothesConfig[] = [ ///////衣服
    {name:'守护之铠',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'镜芒铠',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'圣痕之铠',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'奇迹庇佑',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'龙麟铠甲',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'祭祀血袍',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'暗血冥袍',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'魔导之魂',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'和谐之舞',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'真理圣袍',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
]

let helmet_list:HelmetConfig[] = [//////////头盔
    {name:'九耀御雷',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'冥虹镜芒',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'龙翼圣痕',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'恐惧首级',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'噩梦之首',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'魔海诱惑',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'银月清歌',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'轻羽流星',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'远古迷梦',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
]

let jewelry_list:JewelryConfig[] = [//////////首饰
    {name:'碧血手镯',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'鹰眼手镯',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'辉煌手镯',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'庇护手镯',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'烈焰永恒',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'紫电风暴',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'迷幻魔影',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'幻蓝天霞',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'深蓝传说',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'凤翼天宇',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
]

let necklace_list:NecklaceConfig[] = [/////////项链
    {name:'恶鬼',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'狂暴',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'水神',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'真理',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'赤心',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'黑月',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'辉煌',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'月石',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'火焰项链',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'帝王项链',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'永恒之链',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'凝泪微华',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'时空之轮',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'混沌之链',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
]

let shoes_list:ShoesConfig[] = [///////////鞋子
    {name:'辉煌圣靴',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'神明战靴',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'寒光圣靴',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'光辉奇迹',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'银澜月华',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'龙神御风',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'虚幻圆舞',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'碧波万里',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'清风之拂',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'转瞬千年',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
]

let drug_list:DrugConfig[] = [////////////药品
    {name:'止血草',blood:0,magic:0,effect_name:'',explain:''},
    {name:'大补丸',blood:0,magic:0,effect_name:'',explain:''},
    {name:'黑玉断续膏',blood:0,magic:0,effect_name:'',explain:''},
    {name:'千年灵芝',blood:0,magic:0,effect_name:'',explain:''},
    {name:'首阳参',blood:0,magic:0,effect_name:'',explain:''},
    {name:'百草丹',blood:0,magic:0,effect_name:'',explain:''},
    {name:'定魂丹',blood:0,magic:0,effect_name:'',explain:''},
    {name:'大西瓜',blood:0,magic:0,effect_name:'',explain:''},
    {name:'万年雪霜',blood:0,magic:0,effect_name:'',explain:''},
    {name:'千年雪霜',blood:0,magic:0,effect_name:'',explain:''},
    {name:'包子',blood:0,magic:0,effect_name:'',explain:''},
    {name:'大包子',blood:0,magic:0,effect_name:'',explain:''},
    {name:'金创药',blood:0,magic:0,effect_name:'',explain:''},
    {name:'超级金创药',blood:0,magic:0,effect_name:'',explain:''},
    {name:'灵引咒',blood:0,magic:0,effect_name:'CallPet',explain:'召唤一只骷髅为你战斗。',pet_config:{name:'骷髅',blood:100,magic:100,blood_limit:100,magic_limit:100,physics_attack:100,magic_attack:0,physics_defense:50,magic_defense:20,life_time:100,cd_time:1}},
    {name:'化魂咒',blood:0,magic:0,effect_name:'CallPet',explain:'召唤一只麒麟为你战斗。',pet_config:{name:'麒麟',blood:100,magic:100,blood_limit:100,magic_limit:100,physics_attack:100,magic_attack:0,physics_defense:50,magic_defense:20,life_time:100,cd_time:1}},
    {name:'飞仙咒',blood:0,magic:0,effect_name:'CallPet',explain:'召唤一只哮天犬为你战斗。',pet_config:{name:'哮天犬',blood:100,magic:100,blood_limit:100,magic_limit:100,physics_attack:100,magic_attack:0,physics_defense:50,magic_defense:20,life_time:100,cd_time:1}},
]

let skillBook_list:SkillBookConfig[] = [////////////技能书
    {name:'烈火',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'RagingFire',explain:'烈火'},
    {name:'狂风斩',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'FierceWind',explain:'狂风斩'},
    {name:'逐日剑法',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'PursueSun',explain:'逐日剑法'},
    {name:'冰咆哮',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'Hailstorm',explain:'冰咆哮',effect_config:{name:'冰咆哮',attack_l:13,type:'attack'}},
    {name:'流星火雨',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'MeteorSwarm',explain:'流星火雨',effect_config:{name:'流星火雨',attack_l:16,type:'attack'}},
    {name:'灭天火',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'SkyFire',explain:'灭天火',effect_config:{name:'灭天火',attack_l:19,type:'attack'}},
    {name:'噬血术',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'Hemophagy',explain:'噬血术',effect_config:{name:'噬血术',attack_l:19,type:'attack'}},
    {name:'治愈术',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'Cure',explain:'治愈术',effect_config:{name:'',attack_l:1,type:'assist',continue_time:100,add_continue_blood:20,add_continue_magic:0}},
    {name:'灵引符',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'CallPet',explain:'召唤一只骷髅为你战斗。',pet_config:{name:'骷髅',blood:100,magic:100,blood_limit:100,magic_limit:100,physics_attack:100,magic_attack:0,physics_defense:50,magic_defense:20,life_time:100,cd_time:1}},
    {name:'化魂符',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'CallPet',explain:'召唤一只麒麟为你战斗。',pet_config:{name:'麒麟',blood:100,magic:100,blood_limit:100,magic_limit:100,physics_attack:100,magic_attack:0,physics_defense:50,magic_defense:20,life_time:100,cd_time:1}},
    {name:'飞仙符',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'CallPet',explain:'召唤一只哮天犬为你战斗。',pet_config:{name:'哮天犬',blood:100,magic:100,blood_limit:100,magic_limit:100,physics_attack:100,magic_attack:0,physics_defense:50,magic_defense:20,life_time:100,cd_time:1}},
]

export = {
    arms_knife_list:arms_knife_list,
    arms_staff_list:arms_staff_list,
    arms_stick_list:arms_stick_list,
    clothes_list:clothes_list,
    helmet_list:helmet_list,
    jewelry_list:jewelry_list,
    necklace_list:necklace_list,
    shoes_list:shoes_list,
    drug_list:drug_list,
    skillBook_list:skillBook_list,
}

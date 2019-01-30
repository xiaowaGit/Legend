import { ArmsConfig } from "../servers/scene/Res/Arms";
import { ClothesConfig } from "../servers/scene/Res/Clothes";
import { HelmetConfig } from "../servers/scene/Res/Helmet";
import { JewelryConfig } from "../servers/scene/Res/Jewelry";
import { NecklaceConfig } from "../servers/scene/Res/Necklace";
import { ShoesConfig } from "../servers/scene/Res/Shoes";
import { DrugConfig } from "../servers/scene/Res/Drug";
import { SkillBookConfig } from "../servers/scene/Res/SkillBook";


let arms_list:ArmsConfig[] = [ ////////////武器
    {name:'',physics_attack:100,magic_attack:0,has_blood:50,has_magic:50,arms_type:'knife'},
    {name:'',physics_attack:300,magic_attack:0,has_blood:150,has_magic:50,arms_type:'knife'},
    {name:'',physics_attack:500,magic_attack:0,has_blood:250,has_magic:50,arms_type:'knife'},
    
    {name:'',physics_attack:0,magic_attack:100,has_blood:50,has_magic:50,arms_type:'staff'},
    {name:'',physics_attack:0,magic_attack:300,has_blood:50,has_magic:150,arms_type:'staff'},
    {name:'',physics_attack:0,magic_attack:500,has_blood:50,has_magic:250,arms_type:'staff'},
    
    {name:'木棍',physics_attack:0,magic_attack:100,has_blood:50,has_magic:50,arms_type:'stick'},
    {name:'铁棍',physics_attack:0,magic_attack:400,has_blood:150,has_magic:150,arms_type:'stick'},
    {name:'金箍棒',physics_attack:0,magic_attack:600,has_blood:250,has_magic:250,arms_type:'stick'},
]

let clothes_list:ClothesConfig[] = [ ///////衣服
    {name:'',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
]

let helmet_list:HelmetConfig[] = [//////////头盔
    {name:'',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
]

let jewelry_list:JewelryConfig[] = [//////////首饰
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
]

let necklace_list:NecklaceConfig[] = [/////////项链
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,physics_attack:0,magic_attack:0,physics_defense:0,magic_defense:0,speed:0,has_physics_attack:0,has_magic_attack:0},
]

let shoes_list:ShoesConfig[] = [///////////鞋子
    {name:'',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
    {name:'',blood_limit:0,magic_limit:0,speed:0,physics_defense:0,magic_defense:0,has_physics_attack:0,has_magic_attack:0},
]

let drug_list:DrugConfig[] = [////////////药品
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,effect_name:'',explain:''},
]

let skillBook_list:SkillBookConfig[] = [////////////技能书
    {name:'',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'',explain:''},
    {name:'',blood:0,magic:0,consume_magic:0,cd:0,effect_name:'',explain:''},
]

export = {
    arms_list:arms_list,
    clothes_list:clothes_list,
    helmet_list:helmet_list,
    jewelry_list:jewelry_list,
    necklace_list:necklace_list,
    shoes_list:shoes_list,
    drug_list:drug_list,
    skillBook_list:skillBook_list,
}

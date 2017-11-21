import Mock from 'mockjs';

let Random = Mock.Random;

let template = {
    "msg":"success",
    "status":"1",
    'data':{
        "NB|40":[{
            "code|+1":1,
            "custshortname":Random.string(5),
            "pk_cubasdoc":Random.string(8),
            "name":Random.string(8)
        }],
        "WB|40":[{
            "code|+1":500,
            "custshortname":Random.string(5),
            "pk_cubasdoc":Random.string(8),
            "name":Random.string(8)
        }]
    }
}

let m_data = JSON.stringify(Mock.mock(template),null,4);

export default m_data;

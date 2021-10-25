Search.setIndex({docnames:["alab_management","alab_management.device_def","alab_management.executor","alab_management.lab_status","alab_management.logger","alab_management.op_def","alab_management.scripts","alab_management.task_manager","alab_management.utils","index","installation","modules"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["alab_management.rst","alab_management.device_def.rst","alab_management.executor.rst","alab_management.lab_status.rst","alab_management.logger.rst","alab_management.op_def.rst","alab_management.scripts.rst","alab_management.task_manager.rst","alab_management.utils.rst","index.rst","installation.md","modules.rst"],objects:{"":{alab_management:[0,0,0,"-"]},"alab_management.config":{AlabConfig:[0,1,1,""],froze_config:[0,2,1,""]},"alab_management.db":{get_collection:[0,2,1,""]},"alab_management.device_def":{base_device:[1,0,0,"-"]},"alab_management.device_def.base_device":{BaseDevice:[1,1,1,""],add_device:[1,2,1,""],get_all_devices:[1,2,1,""],get_device:[1,2,1,""]},"alab_management.device_def.base_device.BaseDevice":{description:[1,3,1,""],init:[1,4,1,""],name:[1,3,1,""],sample_positions:[1,4,1,""]},"alab_management.executor":{executor:[2,0,0,"-"],scheduler:[2,0,0,"-"]},"alab_management.executor.executor":{Executor:[2,1,1,""]},"alab_management.executor.executor.Executor":{run:[2,4,1,""]},"alab_management.lab_status":{device_view:[3,0,0,"-"],sample_view:[3,0,0,"-"],task_view:[3,0,0,"-"]},"alab_management.lab_status.device_view":{DeviceStatus:[3,1,1,""],DeviceView:[3,1,1,""]},"alab_management.lab_status.device_view.DeviceStatus":{ERROR:[3,3,1,""],HOLD:[3,3,1,""],IDLE:[3,3,1,""],RUNNING:[3,3,1,""],STOPPED:[3,3,1,""],UNKNOWN:[3,3,1,""]},"alab_management.lab_status.device_view.DeviceView":{get_device_info:[3,4,1,""],get_status:[3,4,1,""],set_idle:[3,4,1,""],set_running:[3,4,1,""],set_status:[3,4,1,""]},"alab_management.lab_status.sample_view":{SamplePositionStatus:[3,1,1,""],SampleView:[3,1,1,""]},"alab_management.lab_status.sample_view.SamplePositionStatus":{EMPTY:[3,3,1,""],LOCKED:[3,3,1,""],OCCUPIED:[3,3,1,""],UNKNOWN:[3,3,1,""]},"alab_management.lab_status.sample_view.SampleView":{delete_sample:[3,4,1,""],find_possible_path:[3,4,1,""],query_simple_id:[3,4,1,""],update_simple_view:[3,4,1,""]},"alab_management.lab_status.task_view":{TaskView:[3,1,1,""]},"alab_management.lab_status.task_view.TaskView":{delete_task:[3,4,1,""],get_next_task:[3,4,1,""],get_prev_task:[3,4,1,""],query_task:[3,4,1,""],update_task:[3,4,1,""]},"alab_management.op_def":{base_operation:[5,0,0,"-"]},"alab_management.op_def.base_operation":{BaseMovingOperation:[5,1,1,""],BaseOperation:[5,1,1,""]},"alab_management.op_def.base_operation.BaseMovingOperation":{dest_location:[5,4,1,""],get_possible_src_dest_pairs:[5,4,1,""],sample_id:[5,3,1,""],task_id:[5,3,1,""]},"alab_management.op_def.base_operation.BaseOperation":{dest_location:[5,4,1,""],is_running:[5,4,1,""],occupied_positions:[5,4,1,""],operation_location:[5,4,1,""],run:[5,4,1,""],sample_id:[5,3,1,""],task_id:[5,3,1,""]},"alab_management.sample_position":{SamplePosition:[0,1,1,""],SamplePositionPair:[0,1,1,""]},"alab_management.sample_position.SamplePosition":{description:[0,3,1,""],name:[0,3,1,""]},"alab_management.sample_position.SamplePositionPair":{containers:[0,3,1,""],dest:[0,3,1,""],src:[0,3,1,""]},"alab_management.scripts":{cleanup_lab:[6,0,0,"-"],launch:[6,0,0,"-"],setup_lab:[6,0,0,"-"]},"alab_management.scripts.cleanup_lab":{clean_up_db:[6,2,1,""]},"alab_management.scripts.launch":{launch_executor:[6,2,1,""],launch_lab:[6,2,1,""],launch_task_manager:[6,2,1,""]},"alab_management.scripts.setup_lab":{add_devices_to_db:[6,2,1,""],add_sample_positions_to_db:[6,2,1,""],add_tasks_to_db:[6,2,1,""],init_with_fake_parameters:[6,2,1,""],make_sample_position_graph:[6,2,1,""],setup_from_device_def:[6,2,1,""],setup_from_task_def:[6,2,1,""],setup_lab:[6,2,1,""]},"alab_management.task_manager":{compiler:[7,0,0,"-"],task_manager:[7,0,0,"-"]},"alab_management.task_manager.task_manager":{TaskManager:[7,1,1,""]},"alab_management.task_manager.task_manager.TaskManager":{run:[7,4,1,""]},"alab_management.utils":{fake_device:[8,0,0,"-"],module_ops:[8,0,0,"-"],typing_ops:[8,0,0,"-"]},"alab_management.utils.fake_device":{FakeDevice:[8,1,1,""]},"alab_management.utils.fake_device.FakeDevice":{init:[8,4,1,""],name:[8,3,1,""],sample_positions:[8,4,1,""]},"alab_management.utils.module_ops":{get_full_cls_name:[8,2,1,""],import_module_from_path:[8,2,1,""]},"alab_management.utils.typing_ops":{is_typing:[8,2,1,""]},alab_management:{config:[0,0,0,"-"],db:[0,0,0,"-"],device_def:[1,0,0,"-"],executor:[2,0,0,"-"],lab_status:[3,0,0,"-"],logger:[4,0,0,"-"],op_def:[5,0,0,"-"],sample_position:[0,0,0,"-"],scripts:[6,0,0,"-"],task_manager:[7,0,0,"-"],utils:[8,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","class","Python class"],"2":["py","function","Python function"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"]},objtypes:{"0":"py:module","1":"py:class","2":"py:function","3":"py:attribute","4":"py:method"},terms:{"abstract":[1,5],"case":0,"class":[0,1,2,3,5,6,7,8],"default":6,"enum":3,"float":6,"function":3,"int":6,"return":[0,1,3,5,6],"static":5,For:6,ROS:9,The:[3,6],abc:[1,5],accepted_arg:6,access:10,add:[0,6],add_devic:1,add_devices_to_db:6,add_sample_positions_to_db:6,add_tasks_to_db:6,aim:9,alab_manag:9,alabconfig:0,all:[0,3,6],allow:0,alreadi:6,ani:3,annot:6,api:[3,9],appear:6,arg:[2,7],authent:0,autonom:9,base:[0,1,2,3,5,6,7,8],base_devic:[0,8,11],base_oper:[0,11],basedevic:[1,3,6,8],basemovingoper:5,baseoper:[5,6],basic:3,between:6,bool:5,bson:5,built:6,can:[3,6],classvar:1,clean_up_db:6,cleanup_lab:[0,11],clear:3,cls:[6,8],collect:[0,6],compil:[0,11],config:[6,11],config_:0,configur:9,construct:9,contain:0,content:11,conveni:0,convert:0,core:6,current:[3,9],data:[0,6],databas:[3,6,10],defin:6,definit:6,delete_sampl:3,delete_task:3,descript:[0,1,6],dest:0,dest_loc:5,destin:[3,6],devic:[1,3,6],device_def:[0,8,11],device_dir:6,device_nam:3,device_view:[0,11],devicestatu:3,deviceview:3,dict:[0,1,3,6],doc:9,done:9,drop:6,easier:6,edg:6,empti:3,enumer:3,error:3,executor:[0,6,11],fake:6,fake_devic:[0,11],fakedevic:[6,8],file:6,find_possible_path:3,from:[3,6],from_:3,froze_config:0,frozen:0,frozen_config:0,gener:[3,6],get:[0,3,6],get_all_devic:1,get_collect:0,get_devic:1,get_device_info:3,get_full_cls_nam:8,get_next_task:3,get_possible_src_dest_pair:5,get_prev_task:3,get_statu:3,given:3,has:[6,9],have:10,hold:3,how:6,identifi:6,idl:3,implement:6,import_module_from_path:8,includ:6,index:9,info:6,inform:3,inherit:[3,6],init:[1,8],init_with_fake_paramet:6,initi:6,insert:6,instal:9,instanc:6,is_run:5,is_typ:8,iter:6,just:[6,9],kwarg:[2,7],lab_statu:[0,11],lambda:3,last:3,launch:[0,11],launch_executor:6,launch_lab:6,launch_task_manag:6,least:10,like:[6,9],list:[0,1,5,6],local:10,locat:6,lock:3,logger:[0,11],machin:3,make:6,make_sample_position_graph:6,mappingproxi:0,modifi:0,modul:[9,11],module_op:[0,11],mongocli:0,mongodb:[6,10],move:6,must:10,name:[0,1,3,6,8],nameerror:6,need:[0,6],nest:6,none:[0,3],now:6,number:6,object:[0,2,3,7],objectid:[3,5],occupi:[3,6],occupied_posit:5,one:[6,10],op_def:[0,11],oper:[3,6],operation_loc:5,option:3,other:3,packag:[9,11],page:9,pair:6,paramet:[0,3,6],path:[6,8],place:6,platform:9,posit:6,procedur:0,properti:[1,5,8],provid:[3,9],python:10,queri:[3,6],query_simple_id:3,query_task:3,queue:3,quickstart:9,rais:6,refer:10,relat:3,remot:10,remov:6,robot:9,run:[2,3,5,7],sampl:[3,6],sample_id:[3,5],sample_posit:[1,6,8,11],sample_view:[0,11],sampleposit:[0,1,6],samplepositionpair:[0,5],samplepositionstatu:3,sampleview:3,schedul:[0,11],script:[0,11],search:9,set:[3,6],set_idl:3,set_run:3,set_statu:3,setup:10,setup_from_device_def:6,setup_from_task_def:6,setup_lab:[0,11],sharabl:9,should:[3,6],skip:6,some:6,sourc:[0,1,2,3,5,6,7,8],specifi:6,src:0,stage:3,statu:[3,6],still:9,stop:3,store:[0,3,6],str:[0,1,3,5,6,8],submodul:11,subpackag:11,support:[3,6],synthesi:9,system:6,task:[3,6],task_dir:6,task_id:[3,5],task_manag:[0,6,11],task_view:[0,11],taskmanag:7,taskview:3,tell:6,them:6,thi:[9,10],thing:6,tupl:5,two:6,type:[0,1,3,5,6],typing_op:[0,11],under:9,union:3,uniqu:6,unknown:[3,6],updat:3,update_simple_view:3,update_task:3,used:0,user:6,util:[0,11],valu:3,view:[3,6],want:3,well:3,what:9,when:6,where:6,which:[0,3,6],whose:6,workflow:9,wrapper:0,write:6,you:10},titles:["alab_management package","alab_management.device_def package","alab_management.executor package","alab_management.lab_status package","alab_management.logger package","alab_management.op_def package","alab_management.scripts package","alab_management.task_manager package","alab_management.utils package","Welcome to Alab Management System.","Installation","alab_management"],titleterms:{For:10,alab:9,alab_manag:[0,1,2,3,4,5,6,7,8,11],base_devic:1,base_oper:5,cleanup_lab:6,compil:7,config:0,content:[0,1,2,3,4,5,6,7,8],develop:10,device_def:1,device_view:3,executor:2,fake_devic:8,indic:9,instal:10,lab_statu:3,launch:6,logger:4,manag:9,modul:[0,1,2,3,4,5,6,7,8],module_op:8,op_def:5,packag:[0,1,2,3,4,5,6,7,8],prerequisit:10,purpos:10,sample_posit:0,sample_view:3,schedul:2,script:6,setup_lab:6,submodul:[0,1,2,3,5,6,7,8],subpackag:0,system:9,tabl:9,task_manag:7,task_view:3,typing_op:8,util:8,welcom:9}})
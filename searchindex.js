Search.setIndex({docnames:["alab_management","alab_management.config","alab_management.db","alab_management.device_view","alab_management.device_view.device","alab_management.device_view.device_view","alab_management.executor","alab_management.experiment_manager","alab_management.experiment_view","alab_management.experiment_view.experiment","alab_management.experiment_view.experiment_view","alab_management.lab_manager","alab_management.logger","alab_management.sample_view","alab_management.sample_view.sample","alab_management.sample_view.sample_view","alab_management.task_view","alab_management.task_view.task","alab_management.task_view.task_view","device_definition","index","installation","setup","task_definition"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["alab_management.rst","alab_management.config.rst","alab_management.db.rst","alab_management.device_view.rst","alab_management.device_view.device.rst","alab_management.device_view.device_view.rst","alab_management.executor.rst","alab_management.experiment_manager.rst","alab_management.experiment_view.rst","alab_management.experiment_view.experiment.rst","alab_management.experiment_view.experiment_view.rst","alab_management.lab_manager.rst","alab_management.logger.rst","alab_management.sample_view.rst","alab_management.sample_view.sample.rst","alab_management.sample_view.sample_view.rst","alab_management.task_view.rst","alab_management.task_view.task.rst","alab_management.task_view.task_view.rst","device_definition.rst","index.rst","installation.rst","setup.rst","task_definition.rst"],objects:{"":{alab_management:[0,0,0,"-"]},"alab_management.config":{froze_config:[1,1,1,""]},"alab_management.db":{get_collection:[2,1,1,""]},"alab_management.device_view":{device:[4,0,0,"-"],device_view:[5,0,0,"-"]},"alab_management.device_view.device":{BaseDevice:[19,2,1,""],add_device:[4,1,1,""],get_all_devices:[4,1,1,""]},"alab_management.device_view.device.BaseDevice":{__init__:[19,3,1,""],description:[4,4,1,""],emergent_stop:[19,3,1,""],is_running:[4,3,1,""],sample_positions:[19,3,1,""]},"alab_management.device_view.device_view":{DeviceStatus:[5,2,1,""],DeviceView:[5,2,1,""],DevicesLock:[5,2,1,""]},"alab_management.device_view.device_view.DeviceStatus":{ERROR:[5,4,1,""],HOLD:[5,4,1,""],IDLE:[5,4,1,""],OCCUPIED:[5,4,1,""],UNKNOWN:[5,4,1,""]},"alab_management.device_view.device_view.DeviceView":{add_devices_to_db:[5,3,1,""],clean_up_device_collection:[5,3,1,""],get_all:[5,3,1,""],get_available_devices:[5,3,1,""],get_device:[5,3,1,""],get_devices_by_task:[5,3,1,""],get_status:[5,3,1,""],occupy_device:[5,3,1,""],release_device:[5,3,1,""],request_devices:[5,3,1,""],sync_device_status:[5,3,1,""]},"alab_management.device_view.device_view.DevicesLock":{devices:[5,3,1,""],release:[5,3,1,""],running_devices:[5,3,1,""]},"alab_management.executor":{Executor:[6,2,1,""],ParameterError:[6,5,1,""]},"alab_management.executor.Executor":{run:[6,3,1,""],submit_task:[6,3,1,""]},"alab_management.experiment_manager":{ExperimentManager:[7,2,1,""]},"alab_management.experiment_manager.ExperimentManager":{handle_pending_experiments:[7,3,1,""],mark_completed_experiments:[7,3,1,""],run:[7,3,1,""]},"alab_management.experiment_view":{experiment:[9,0,0,"-"],experiment_view:[10,0,0,"-"]},"alab_management.experiment_view.experiment":{InputExperiment:[9,2,1,""]},"alab_management.experiment_view.experiment.InputExperiment":{name:[9,4,1,""],samples:[9,4,1,""],tasks:[9,4,1,""]},"alab_management.experiment_view.experiment_view":{ExperimentStatus:[10,2,1,""],ExperimentView:[10,2,1,""]},"alab_management.experiment_view.experiment_view.ExperimentStatus":{COMPLETED:[10,4,1,""],PENDING:[10,4,1,""],RUNNING:[10,4,1,""]},"alab_management.experiment_view.experiment_view.ExperimentView":{create_experiment:[10,3,1,""],get_experiment:[10,3,1,""],get_experiments_with_status:[10,3,1,""],update_experiment_status:[10,3,1,""],update_sample_task_id:[10,3,1,""]},"alab_management.lab_manager":{DeviceRunningException:[11,5,1,""],LabManager:[11,2,1,""],ResourcesRequest:[11,2,1,""]},"alab_management.lab_manager.LabManager":{get_locked_sample_positions:[11,3,1,""],get_occupied_devices:[11,3,1,""],get_sample:[11,3,1,""],move_sample:[11,3,1,""],request_resources:[11,3,1,""],task_id:[11,3,1,""]},"alab_management.lab_manager.ResourcesRequest":{preprocess:[11,3,1,""]},"alab_management.logger":{DBLogger:[12,2,1,""],LoggingLevel:[12,2,1,""],LoggingType:[12,2,1,""]},"alab_management.logger.DBLogger":{filter_log:[12,3,1,""],log:[12,3,1,""],log_amount:[12,3,1,""],log_characterization_result:[12,3,1,""],log_device_signal:[12,3,1,""],system_log:[12,3,1,""]},"alab_management.logger.LoggingLevel":{CRITICAL:[12,4,1,""],DEBUG:[12,4,1,""],ERROR:[12,4,1,""],FATAL:[12,4,1,""],INFO:[12,4,1,""],WARN:[12,4,1,""],WARNING:[12,4,1,""]},"alab_management.logger.LoggingType":{CHARACTERIZATION_RESULT:[12,4,1,""],DEVICE_SIGNAL:[12,4,1,""],OTHER:[12,4,1,""],SAMPLE_AMOUNT:[12,4,1,""],SYSTEM_LOG:[12,4,1,""]},"alab_management.sample_view":{sample:[14,0,0,"-"],sample_view:[15,0,0,"-"]},"alab_management.sample_view.sample":{Sample:[14,2,1,""],SamplePosition:[14,2,1,""]},"alab_management.sample_view.sample.Sample":{name:[14,4,1,""],position:[14,4,1,""],task_id:[14,4,1,""]},"alab_management.sample_view.sample.SamplePosition":{SEPARATOR:[14,4,1,""],description:[14,4,1,""],name:[14,4,1,""],number:[14,4,1,""]},"alab_management.sample_view.sample_view":{SamplePositionRequest:[15,2,1,""],SamplePositionStatus:[15,2,1,""],SamplePositionsLock:[15,2,1,""],SampleView:[15,2,1,""]},"alab_management.sample_view.sample_view.SamplePositionRequest":{from_py_type:[15,3,1,""],from_str:[15,3,1,""],number:[15,4,1,""],prefix:[15,4,1,""]},"alab_management.sample_view.sample_view.SamplePositionStatus":{EMPTY:[15,4,1,""],LOCKED:[15,4,1,""],OCCUPIED:[15,4,1,""]},"alab_management.sample_view.sample_view.SamplePositionsLock":{release:[15,3,1,""],sample_positions:[15,3,1,""]},"alab_management.sample_view.sample_view.SampleView":{add_sample_positions_to_db:[15,3,1,""],clean_up_sample_position_collection:[15,3,1,""],create_sample:[15,3,1,""],get_available_sample_position:[15,3,1,""],get_sample:[15,3,1,""],get_sample_position:[15,3,1,""],get_sample_position_status:[15,3,1,""],get_sample_positions_by_task:[15,3,1,""],is_unoccupied_position:[15,3,1,""],lock_sample_position:[15,3,1,""],move_sample:[15,3,1,""],release_sample_position:[15,3,1,""],request_sample_positions:[15,3,1,""],update_sample_task_id:[15,3,1,""]},"alab_management.task_view":{task:[17,0,0,"-"],task_view:[18,0,0,"-"]},"alab_management.task_view.task":{BaseTask:[23,2,1,""],add_task:[17,1,1,""],get_all_tasks:[17,1,1,""]},"alab_management.task_view.task.BaseTask":{__init__:[23,3,1,""],run:[23,3,1,""]},"alab_management.task_view.task_view":{TaskStatus:[18,2,1,""],TaskView:[18,2,1,""]},"alab_management.task_view.task_view.TaskStatus":{COMPLETED:[18,4,1,""],ERROR:[18,4,1,""],PAUSED:[18,4,1,""],READY:[18,4,1,""],REQUESTING_RESOURCE:[18,4,1,""],RUNNING:[18,4,1,""],STOPPED:[18,4,1,""],WAITING:[18,4,1,""]},"alab_management.task_view.task_view.TaskView":{create_task:[18,3,1,""],get_ready_tasks:[18,3,1,""],get_status:[18,3,1,""],get_task:[18,3,1,""],try_to_mark_task_ready:[18,3,1,""],update_status:[18,3,1,""],update_task_dependency:[18,3,1,""]},alab_management:{config:[1,0,0,"-"],db:[2,0,0,"-"],device_view:[3,0,0,"-"],executor:[6,0,0,"-"],experiment_manager:[7,0,0,"-"],experiment_view:[8,0,0,"-"],lab_manager:[11,0,0,"-"],logger:[12,0,0,"-"],sample_view:[13,0,0,"-"],task_view:[16,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","method","Python method"],"4":["py","attribute","Python attribute"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:method","4":"py:attribute","5":"py:exception"},terms:{"127":19,"27017":22,"502":19,"abstract":[4,17,19,20,23],"case":2,"class":[4,5,6,7,9,10,11,12,14,15,17,18,19,20,23],"default":[15,22],"enum":[5,10,12,15,18],"float":23,"function":[5,12,15,17,19,23],"import":[19,20,23],"int":[5,11,12,14,15,19],"long":[19,23],"new":[11,15,18],"return":[1,2,4,5,10,11,12,15,17,18,19,23],"super":[19,23],"true":5,"try":[6,11,15,17,18,23],"while":[17,18,23],And:11,But:[19,23],For:[19,22],ROS:20,The:[4,5,6,10,11,15,17,18,19,20,22,23],There:5,With:20,__exit__:[5,15],__init__:[19,22,23],_devicetyp:5,_id:14,_resource_lock:11,_sampl:9,_task:9,abc:[4,17],about:[4,17,19,23],access:[11,21],accord:22,acquir:6,actual:[6,15],acycl:20,add:[2,10,18],add_devic:[4,19],add_devices_to_db:5,add_sample_positions_to_db:15,add_task:[17,23],address:19,after:15,aim:20,alab:[20,22],alab_manag:[19,23],alabo:22,all:[4,5,6,11,15,17,18,19,20,23],alloc:[17,23],allow:[1,20],alreadi:[5,15],also:[5,10,11,17,18,20,22,23],alwai:[19,23],amount:12,ani:[4,5,7,10,11,12,15,18,19],api:5,appear:[5,15],architectur:20,arg:[19,23],assign:[10,11,17,18,20,22,23],attribut:[4,19],authent:[2,22],automat:[5,17,22,23],autonom:20,avail:[5,11,15,17,23],base:[4,5,6,7,9,10,11,12,14,15,17,18],basedevic:[4,5,11,19,20],basemodel:[9,11,15],basetask:[17,18,20,23],basic:[12,14,20],batch:20,batteri:12,been:[10,14],befor:[18,22],belong:11,besid:22,between:20,block:5,bool:[4,5,15],briefli:14,bson:14,call:[5,15,17,23],can:[4,5,11,12,14,15,17,19,20,22,23],cannot:[15,17,18,23],certain:[12,20],character:12,characterization_result:12,charg:12,check:[4,15,18],chemic:[12,20],classmethod:[11,15],classvar:[4,14],clean:5,clean_up_device_collect:5,clean_up_sample_position_collect:15,code:[19,20,23],collect:[2,5,7,10,15,18,20],come:12,command:[17,23],commun:20,complet:[7,10,17,18,20,23],conduct:20,config:[0,22],config_:1,configur:20,conflict:[17,23],connect:[19,22],constrainedintvalu:15,constrainedstrvalu:9,construct:20,contain:20,context:[5,15,17,23],conveni:2,convert:1,coordin:[4,14,19],core:6,creat:[10,15,20],create_experi:10,create_sampl:15,create_task:18,creation:10,critic:12,current:[14,17,18,20,23],custom:[12,19,21,22,23],cycl:20,dag:20,dashboard:5,data:[1,9,11,12,15,17,23],databas:[5,7,9,10,12,14,15,17,18,20,21,22,23],dblogger:12,debug:12,def:[4,19,23],defin:[4,14,15,17,20,22],definit:[5,20,21],depend:20,describ:[4,14,19,20],descript:[4,5,14,15,19],dest:[17,23],devic:[0,3,5,6,11,12,17,20,21,22,23],device_1:22,device_2:22,device_3:22,device_nam:5,device_name_1:5,device_sign:12,device_typ:5,device_view:[0,11],devicelock:5,devicerunningexcept:11,devices_and_posit:[17,23],devices_and_sample_posit:11,deviceslock:5,devicestatu:5,devicetyp:11,deviceview:[5,20],dict:[1,4,5,10,11,12,15,17,18],differ:12,dir:[19,22,23],direct:20,directli:15,directori:22,discuss:21,doe:[4,19],doesn:[4,19,23],done:[10,20],driver:[19,20],drop:15,duplic:5,dure:[12,18],each:[6,11,20],easili:20,els:[12,15],emerg:[4,19],emergent_stop:[4,19],empti:[15,20,22],encount:18,entri:[5,15,18],error:[5,12,18],event:7,exampl:[4,17,19,22,23],except:[6,11],execut:[6,12,18,19,23],executor:[0,7],exist:15,exit:15,exp_id:10,experi:[0,7,8,10],experiment_manag:0,experiment_view:0,experimentmanag:7,experimentstatu:10,experimentview:10,extens:20,fatal:12,filter:10,filter_log:12,find:[6,7,11,12],finish:18,flag:7,flexibl:20,folder:21,follow:[9,22],format:[5,9,10,11,15,20],found:5,from:[4,7,12,17,18,19,20,23],from_py_typ:15,from_str:15,froze_config:1,frozen:1,frozen_config:1,furnac:[4,5,11,12,17,19,23],furnace_1:[11,19],furnace_t:[4,19],furnacecontrol:19,gener:22,geograph:14,get:[2,4,5,10,11,15,17,18,23],get_al:5,get_all_devic:4,get_all_task:17,get_available_devic:5,get_available_sample_posit:15,get_collect:2,get_devic:5,get_devices_by_task:5,get_experi:10,get_experiments_with_statu:10,get_locked_sample_posit:11,get_occupied_devic:11,get_ready_task:18,get_sampl:[11,15],get_sample_posit:15,get_sample_position_statu:15,get_sample_positions_by_task:15,get_statu:[5,18],get_task:18,get_temperatur:[17,23],git:20,github:20,given:[5,15],going:5,graph:20,great:20,handl:[18,22],handle_pending_experi:7,has:[5,10,11,14,15,17,20,22,23],have:[5,11,15,20,21],heat:[4,19,20,23],here:[4,5,17,19,23],higher:12,hold:[4,5,14,18,19,20],host:[20,22],how:[4,17,19,21,22,23],identifi:[4,5,14,19,23],idl:[5,20],ids:[18,20],implement:20,includ:[5,15,19],independ:6,index:20,indic:[5,15],info:[12,15,18],inform:[4,12,19,20,23],inherit:[4,17,18,19,20,23],init:22,initi:[14,19],input:15,inputexperi:[9,10],insert:[5,10,15,18],insid:[4,11,17,19,23],inside_furnac:[17,23],instanc:[4,11,15,20],instead:11,intend:10,introduc:22,is_run:[4,17,23],is_unoccupied_posit:15,iter:12,its:[5,10,15,18,20],itself:22,just:[15,20,22],kind:19,know:11,kwarg:[19,23],lab:[4,10,14,17,19,22,23],lab_manag:[0,17,23],labmanag:[10,11,20,23],later:10,least:21,level:12,life:20,like:[20,22],list:[4,5,9,10,11,15,18,19,20,23],load:[19,22,23],local:21,localhost:22,lock:[15,20],lock_sample_posit:15,log:[12,17,23],log_amount:12,log_characterization_result:12,log_data:12,log_device_sign:[12,17,23],logger:[0,17,23],logging_typ:12,logginglevel:12,loggingtyp:12,longer:5,look:22,loop:[6,7],mai:[5,20,22],main:[9,11,15],make:[19,23],manag:[5,7,10,15,17,18,22,23],manual:[4,19],map:[4,19],mappingproxi:1,mark:[7,18],mark_completed_experi:7,match:15,matter:[4,19,23],maximum:5,mean:14,method:[5,7,10,15,19],modifi:1,modul:[0,3,8,13,16,22],mongocli:2,mongodb:[20,21],more:[5,19,22,23],move:[11,17,23],move_sampl:[11,15],moving_task:[17,23],multipl:[11,20],must:[18,20,21,22],name:[2,4,5,9,11,14,15,17,18,19,22,23],nameerror:5,need:[2,4,5,15,19,20,22,23],need_releas:[5,15],neither:15,next:18,next_task:18,none:[5,11,14,15,18],nor:15,note:11,now:[5,18],number:[11,14,15,17,23],object:[5,6,7,10,11,12,14,15,18,19],objectid:[5,10,11,12,14,15,18,23],occupi:[5,11,15,20],occupy_devic:5,okai:22,old:18,onc:19,one:[5,11,15,18,21],ones:5,onli:[5,11,19,22],only_idl:5,oper:20,option:[5,10,14,15,18,23],other:[12,17,23],our:20,out:7,outsid:5,over:[11,17,20,23],overwrit:18,ownership:[5,17,23],packag:[20,22],page:20,param:12,paramet:[1,5,6,10,15,18,19,20,23],parametererror:6,parent:18,pars:11,pass:18,password:22,pattern:12,paus:18,pend:[7,10,17,20,23],place:20,platform:20,pleas:[19,22],port:[19,22],posit:[4,11,14,15,17,19,20,23],position_prefix:15,pre_task:18,predefin:[12,20],prefix:[11,15],preprocess:11,prev:18,prev_task:18,prevent:[17,23],previou:[18,20],princip:11,procedur:2,process:[6,10],project:20,project_root:22,properli:[19,23],properti:[4,5,11,15,19],provid:[5,19,20,22,23],put:[10,11,20],pydant:[9,11,15],pymongo:20,python:[20,21,22],queri:11,queue:10,rack:20,rais:[5,6,11],rang:12,raw:10,reach:[19,23],read:[7,20],readi:[5,6,18,20],real:[4,19,20],recommend:[19,23],record:[12,20],refer:[18,19,20,21,22,23],regardless:[5,11],regist:[4,17,22],registri:[4,17],releas:[5,11,15,17,23],release_devic:5,release_sample_posit:15,remot:21,renew:19,replac:11,repo:[19,22],repositori:20,repres:[11,17,20,23],represent:20,request:[5,11,15,17,20,23],request_devic:5,request_resourc:[11,17,23],request_sample_posit:15,requesting_resourc:18,requir:[10,18,20],reserv:15,resourc:[11,15,17,20,22,23],resource_request:11,resourcesrequest:11,result:12,robot:20,robot_arm:5,robotarm:5,root:[19,23],run:[4,5,6,7,10,11,17,18,20,22,23],run_program:[17,23],running_devic:5,same:[5,11,15,17,18,23],sampl:[0,4,6,9,10,11,12,13,15,17,18,19,20,23],sample_1:23,sample_2:23,sample_3:23,sample_4:23,sample_amount:12,sample_id:[10,11,15],sample_posit:[4,15,17,19,23],sample_position_1:11,sample_position_prefix:15,sample_position_prefix_1:15,sample_view:[0,11],sampleposit:[4,14,15,19],samplepositionrequest:[11,15],samplepositionslock:15,samplepositionstatu:15,sampleview:[15,20],scan:7,search:20,second:[5,15],section:22,see:[5,10,11],self:[4,17,19,23],send:[17,23],sensor:12,separ:14,serv:22,set:[5,15,19,21],setpoint:[17,23],setup:21,shall:5,sharabl:20,share:[17,20,23],should:[4,5,9,11,15,17,18,19,20,22,23],signal:12,similar:23,sinc:[11,20],skip:15,snippet:20,some:[4,5,12,15,18,19,20,22],someth:[5,20],sometim:11,sourc:[1,4,5,6,7,9,10,11,12,14,15,17,18,19,23],specifi:[4,11,15,19,20,22],start:[6,7,11,18],startwith:15,statu:[5,10,11,15,18],still:[5,11,20],stop:[4,18,19,20],store:[4,18,19,22],str:[4,5,10,11,12,14,15,17,18,19],string:[12,14],structur:15,submit:[6,7,10,18,20],submit_task:6,sure:[19,23],sync:5,sync_device_statu:5,synthesi:20,system:[5,6,12,19,20,22,23],system_log:12,take:[12,17,23],target:22,task:[0,5,6,7,9,10,11,12,15,16,18,20,21,22],task_1:22,task_2:22,task_3:22,task_entri:6,task_id:[5,10,11,12,14,15,17,18,23],task_typ:18,task_view:[0,11],taskstatu:18,taskview:18,tell:15,temperatur:[12,17,20,23],temporari:[4,19],than:[5,12],them:[4,6,19,20,22],thi:[4,5,6,7,9,10,11,12,14,15,17,18,19,20,21,22,23],thread:6,three:20,throughout:20,time:[7,12,19],timeout:[5,15],toml:22,track:20,transfer:[4,19],try_to_mark_task_readi:18,tupl:[15,23],two:20,type:[1,2,4,5,10,11,12,15,17,18,19],uid:15,under:[11,20],union:[12,15,18],uniqu:[4,5,14,19],unknown:5,unlock:15,unoccupi:15,until:[5,11,15,17,18,23],updat:[10,11,15,18,20,23],update_experiment_statu:10,update_sample_task_id:[10,15],update_statu:18,update_task_depend:18,usabl:5,use:[4,10,11,17,19,20,22,23],used:[5,11,15,20],user:[4,9,10,19,20],usernam:22,usual:[5,11,22],valid:[11,15],valu:[5,10,11,12,15,18,20],valueerror:5,vertex:20,via:20,view:[5,10,11,15,18,20,23],voltag:12,wait:[5,18,20],want:11,warn:12,websit:20,weight:12,well:[5,20],what:20,when:[4,5,6,11,15,17,19,20,23],where:[4,12,19,22,23],whether:[4,5,15],which:[1,4,5,6,10,11,12,14,15,17,18,19,20,22,23],within:12,work:[20,22],workflow:[12,20],working_dir:22,wrapper:[2,11,20],write:[9,19],wrong:6,wrote:12,xrd:12,you:[5,11,15,17,19,20,21,22,23],your:[19,22]},titles:["alab_management package","alab_management.config module","alab_management.db module","alab_management.device_view package","alab_management.device_view.device module","alab_management.device_view.device_view module","alab_management.executor module","alab_management.experiment_manager module","alab_management.experiment_view package","alab_management.experiment_view.experiment module","alab_management.experiment_view.experiment_view module","alab_management.lab_manager module","alab_management.logger module","alab_management.sample_view package","alab_management.sample_view.sample module","alab_management.sample_view.sample_view module","alab_management.task_view package","alab_management.task_view.task module","alab_management.task_view.task_view module","Defining a new device","Overview","Installation","Set up definition folder","Defining a new task"],titleterms:{"new":[19,23],For:21,alab_manag:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18],command:22,config:1,configur:22,data:20,defin:[19,23],definit:22,develop:21,devic:[4,19],device_view:[3,4,5],executor:[6,20],experi:[9,20],experiment_manag:7,experiment_view:[8,9,10],file:22,folder:22,indic:20,initi:22,instal:21,lab:20,lab_manag:11,line:22,logger:12,manag:20,modul:[1,2,4,5,6,7,9,10,11,12,14,15,17,18,20],next:[21,22],overview:20,packag:[0,3,8,13,16],prerequisit:21,project:22,purpos:21,regist:[19,23],sampl:14,sample_view:[13,14,15],set:22,statu:20,storag:20,structur:22,submodul:[0,3,8,13,16],subpackag:0,tabl:20,task:[17,23],task_view:[16,17,18],terminolog:20,via:22,what:[21,22]}})
Search.setIndex({docnames:["alab_management","alab_management.device_view","alab_management.experiment_view","alab_management.sample_view","alab_management.scripts","alab_management.task_view","alab_management.utils","index","installation","modules","quickstart"],envversion:{"sphinx.domains.c":2,"sphinx.domains.changeset":1,"sphinx.domains.citation":1,"sphinx.domains.cpp":3,"sphinx.domains.index":1,"sphinx.domains.javascript":2,"sphinx.domains.math":2,"sphinx.domains.python":2,"sphinx.domains.rst":2,"sphinx.domains.std":1,"sphinx.ext.intersphinx":1,"sphinx.ext.todo":2,"sphinx.ext.viewcode":1,sphinx:56},filenames:["alab_management.rst","alab_management.device_view.rst","alab_management.experiment_view.rst","alab_management.sample_view.rst","alab_management.scripts.rst","alab_management.task_view.rst","alab_management.utils.rst","index.rst","installation.rst","modules.rst","quickstart.rst"],objects:{"alab_management.db":{get_collection:[0,1,1,""]},"alab_management.device_view":{device:[1,0,0,"-"],device_view:[1,0,0,"-"]},"alab_management.device_view.device":{BaseDevice:[1,2,1,""],SamplePosition:[1,2,1,""],add_device:[1,1,1,""],get_all_devices:[1,1,1,""]},"alab_management.device_view.device.BaseDevice":{description:[1,3,1,""],emergent_stop:[1,4,1,""],name:[1,3,1,""],sample_positions:[1,4,1,""]},"alab_management.device_view.device.SamplePosition":{description:[1,3,1,""],name:[1,3,1,""]},"alab_management.device_view.device_view":{DeviceStatus:[1,2,1,""],DeviceView:[1,2,1,""],DevicesLock:[1,2,1,""]},"alab_management.device_view.device_view.DeviceStatus":{IDLE:[1,3,1,""],OCCUPIED:[1,3,1,""],UNKNOWN:[1,3,1,""]},"alab_management.device_view.device_view.DeviceView":{add_devices_to_db:[1,4,1,""],clean_up_device_collection:[1,4,1,""],get_device:[1,4,1,""],occupy_device:[1,4,1,""],release_device:[1,4,1,""],request_devices:[1,4,1,""]},"alab_management.device_view.device_view.DevicesLock":{release:[1,4,1,""]},"alab_management.executor":{Executor:[0,2,1,""],ParameterError:[0,5,1,""]},"alab_management.executor.Executor":{run:[0,4,1,""],submit_task:[0,4,1,""]},"alab_management.experiment_manager":{ExperimentManager:[0,2,1,""]},"alab_management.experiment_manager.ExperimentManager":{handle_pending_experiments:[0,4,1,""],mark_completed_experiments:[0,4,1,""],run:[0,4,1,""]},"alab_management.experiment_view":{experiment:[2,0,0,"-"],experiment_view:[2,0,0,"-"]},"alab_management.experiment_view.experiment":{Experiment:[2,2,1,""],ExperimentStatus:[2,2,1,""]},"alab_management.experiment_view.experiment.Experiment":{samples:[2,3,1,""],status:[2,3,1,""],tasks:[2,3,1,""]},"alab_management.experiment_view.experiment.ExperimentStatus":{COMPLETED:[2,3,1,""],PENDING:[2,3,1,""],RUNNING:[2,3,1,""]},"alab_management.experiment_view.experiment_view":{ExperimentView:[2,2,1,""]},"alab_management.experiment_view.experiment_view.ExperimentView":{assign_sample_task_id:[2,4,1,""],create_experiment:[2,4,1,""],get_experiment:[2,4,1,""],get_experiments_with_status:[2,4,1,""],set_experiment_status:[2,4,1,""]},"alab_management.logger":{DBLogger:[0,2,1,""],LoggingLevel:[0,2,1,""],LoggingType:[0,2,1,""]},"alab_management.logger.DBLogger":{filter_log:[0,4,1,""],log:[0,4,1,""],log_amount:[0,4,1,""],log_characterization_result:[0,4,1,""],log_device_signal:[0,4,1,""],system_log:[0,4,1,""]},"alab_management.logger.LoggingLevel":{CRITICAL:[0,3,1,""],DEBUG:[0,3,1,""],ERROR:[0,3,1,""],FATAL:[0,3,1,""],INFO:[0,3,1,""],WARN:[0,3,1,""],WARNING:[0,3,1,""]},"alab_management.logger.LoggingType":{CHARACTERIZATION_RESULT:[0,3,1,""],DEVICE_SIGNAL:[0,3,1,""],OTHER:[0,3,1,""],SAMPLE_AMOUNT:[0,3,1,""],SYSTEM_LOG:[0,3,1,""]},"alab_management.sample_view":{sample:[3,0,0,"-"],sample_view:[3,0,0,"-"]},"alab_management.sample_view.sample":{Sample:[3,2,1,""]},"alab_management.sample_view.sample.Sample":{name:[3,3,1,""],position:[3,3,1,""]},"alab_management.sample_view.sample_view":{SampleView:[3,2,1,""]},"alab_management.sample_view.sample_view.SampleView":{add_sample_positions_to_db:[3,4,1,""],clean_up_sample_position_collection:[3,4,1,""],create_sample:[3,4,1,""],get_sample:[3,4,1,""],is_empty_position:[3,4,1,""],is_valid_position:[3,4,1,""],update_sample_position:[3,4,1,""]},"alab_management.task_view":{task:[5,0,0,"-"],task_view:[5,0,0,"-"]},"alab_management.task_view.task":{BaseTask:[5,2,1,""],add_task:[5,1,1,""],get_all_tasks:[5,1,1,""]},"alab_management.task_view.task.BaseTask":{device_view:[5,3,1,""],logger:[5,3,1,""],run:[5,4,1,""],sample_view:[5,3,1,""],task_id:[5,3,1,""]},"alab_management.task_view.task_view":{TaskStatus:[5,2,1,""],TaskView:[5,2,1,""]},"alab_management.task_view.task_view.TaskStatus":{COMPLETED:[5,3,1,""],ERROR:[5,3,1,""],READY:[5,3,1,""],RUNNING:[5,3,1,""],WAITING:[5,3,1,""]},"alab_management.task_view.task_view.TaskView":{create_task:[5,4,1,""],get_ready_tasks:[5,4,1,""],get_status:[5,4,1,""],get_task:[5,4,1,""],update_status:[5,4,1,""],update_task_dependency:[5,4,1,""]},"alab_management.utils":{graph_op:[6,0,0,"-"],module_ops:[6,0,0,"-"]},"alab_management.utils.graph_op":{Graph:[6,2,1,""]},"alab_management.utils.graph_op.Graph":{get_children:[6,4,1,""],get_parents:[6,4,1,""],has_cycle:[6,4,1,""]},"alab_management.utils.module_ops":{import_module_from_path:[6,1,1,""],load_definition:[6,1,1,""]},alab_management:{db:[0,0,0,"-"],device_view:[1,0,0,"-"],executor:[0,0,0,"-"],experiment_manager:[0,0,0,"-"],experiment_view:[2,0,0,"-"],logger:[0,0,0,"-"],sample_view:[3,0,0,"-"],task_view:[5,0,0,"-"],utils:[6,0,0,"-"]}},objnames:{"0":["py","module","Python module"],"1":["py","function","Python function"],"2":["py","class","Python class"],"3":["py","attribute","Python attribute"],"4":["py","method","Python method"],"5":["py","exception","Python exception"]},objtypes:{"0":"py:module","1":"py:function","2":"py:class","3":"py:attribute","4":"py:method","5":"py:exception"},terms:{"502":10,"abstract":[1,5],"case":0,"class":[0,1,2,3,5,6,7,10],"enum":[0,1,2,5],"function":1,"import":[6,7],"int":10,"new":[3,5],"return":[0,1,2,3,5,6,7,10],"true":1,"try":[0,5],DFS:6,For:10,ROS:7,The:[0,1,5,7,10],There:1,Use:6,With:7,__post_init__:10,_id:3,_miss:5,abc:[1,5],access:8,acquir:0,actual:[0,7],acycl:7,add:[0,5,7,10],add_devic:1,add_devices_to_db:1,add_sample_positions_to_db:3,add_task:5,address:10,adjac:6,aim:7,alab:7,algorithm:6,all:[0,1,5,7],alreadi:[1,3],also:[1,5,7],ani:[0,2,5,6],anyth:3,api:1,appear:[1,3],architectur:7,around:7,assign:5,assign_sample_task_id:2,attribut:1,authent:0,automat:1,autonom:7,base:[0,1,2,3,5,6],basedevic:[1,10],basemodel:2,basemovingoper:10,basetask:[5,10],basic:[3,7],been:3,befor:5,block:1,bool:[1,3,6],briefli:1,bson:5,call:7,can:[1,7],cannot:5,characterization_result:0,charg:0,check:[3,7],classvar:[1,10],clean:1,clean_up_device_collect:1,clean_up_sample_position_collect:3,cleanup_lab:[0,9],code:[7,10],collect:[0,1,3,5,7],command:7,commun:7,complet:[2,5,7],config:[6,9],configur:7,construct:[7,10],content:9,context:1,conveni:0,coordin:1,core:0,correspond:7,creat:3,create_experi:2,create_sampl:3,create_task:5,critic:0,current:[3,5,7],custom:0,cycl:6,dag:7,data:[0,2],databas:[0,1,3,5,7,8],dataclass:10,dblogger:[0,5],debug:0,def:10,defin:[1,5,7],definit:[1,6,10],describ:[1,7],descript:[1,3,10],detect:6,devic:[0,6,7,9],device_sign:0,device_typ:1,device_view:[0,5,9],devicelock:1,deviceslock:1,devicestatu:1,deviceview:[1,5],dict:[0,1,2,5],direct:7,doesn:1,done:7,driver:10,drop:3,duplic:1,dure:[0,5],each:[0,7,10],easili:7,edg:6,emerg:1,emergent_stop:1,encount:5,entri:5,enumer:[0,2],error:[0,5],exampl:10,except:0,execut:[0,5],executor:9,exp_id:2,experi:[0,9],experiment_manag:9,experiment_view:[0,9],experimentmanag:0,experimentstatu:2,experimentview:2,explan:10,extens:7,extra:7,fatal:0,file:6,filter_log:0,find:0,finish:[5,7],flexibl:7,format:[7,10],from:[1,5,6,7,10],furnac:[1,10],furnace_t:10,furnacecontrol:10,geograph:1,get:[0,1,3,5],get_all_devic:1,get_all_task:5,get_children:6,get_collect:0,get_devic:1,get_experi:2,get_experiments_with_statu:2,get_par:6,get_ready_task:5,get_sampl:3,get_statu:5,get_task:5,git:7,github:7,given:1,going:1,graph:[6,7],graph_op:[0,9],great:7,handle_pending_experi:0,has:[1,3,7],has_cycl:6,have:[1,7,8,10],heat:10,here:[1,10],hold:[1,7],host:7,how:1,identifi:[1,5],idl:[1,7],ids:5,implement:7,import_module_from_path:6,includ:[1,3,10],independ:0,index:7,info:[0,3,5],inform:[0,7],inherit:[1,5,10],init:10,initi:[3,7,10],insert:[1,3,5],insid:10,instanc:[1,3],is_empty_posit:3,is_valid_posit:3,iter:0,its:[3,5,6],just:[3,7],kind:1,lab:[1,3],launch:7,launch_lab:[0,9],least:8,level:0,like:7,list:[1,2,5,6],load:6,load_definit:6,local:8,log:0,log_amount:0,log_characterization_result:0,log_data:0,log_device_sign:0,logger:[5,9],logging_typ:0,logginglevel:0,loggingtyp:0,longer:1,mai:7,main:2,manag:[1,3,5],mark:5,mark_completed_experi:0,matter:1,mean:3,meet:1,method:10,modul:9,module_op:[0,9],mongocli:0,mongodb:[7,8],more:10,move:[7,10],must:[5,8],name:[0,1,2,3,5,10],nameerror:1,necessari:7,need:[0,1,7,10],next:5,next_task:5,none:[3,10],now:5,object:[0,1,2,3,5,6],objectid:[1,3,5],occupi:1,occupy_devic:1,old:5,one:[1,3,5,8],ones:1,onli:[1,10],only_idl:1,oper:[7,10],option:3,other:0,our:7,outsid:1,overwrit:5,ownership:1,packag:[7,9],page:7,paramet:[0,1,3,5],parametererror:0,path:6,pattern:0,pend:2,place:7,platform:7,pleas:10,pop:7,port:10,posit:[1,3,7,10],pre_task:5,predefin:0,prev:5,prev_task:5,previou:5,procedur:0,process:0,program:10,project:7,properti:[1,10],provid:[1,7],pydant:2,pymongo:7,python:[7,8],rais:[0,1],read:7,reader:10,readi:[0,1,5,7],recip:7,record:[0,7],refer:[5,8,10],regist:[1,5],registri:[1,5],releas:1,release_devic:1,remot:8,repo:10,repositori:7,repres:7,request:1,request_devic:1,requir:[1,5,7],robot:7,robot_arm:1,robotarm:1,run:[0,2,5,7],same:1,sampl:[0,1,2,5,7,9,10],sample_amount:0,sample_id:[2,3,5],sample_posit:[1,3,10],sample_view:[0,5,9],sampleposit:[1,10],sampleview:[3,5],script:[0,9],search:7,see:1,self:10,send:7,sent:7,sequenc:7,set:1,set_experiment_statu:2,setup:8,setup_lab:[0,9],shall:1,sharabl:7,share:7,should:[1,5,10],similar:10,simpl:10,sinc:7,skip:3,some:[0,3,5,7],someth:1,sourc:[0,1,2,3,5,6],specifi:[1,6],start:5,statu:[1,2,5],still:[7,10],stop:[1,7],store:[5,6],str:[0,1,2,3,5,10],string:1,submit:[0,5,7],submit_task:0,submodul:9,subpackag:9,synthesi:7,system:[0,7],system_log:0,tabl:6,take:0,task:[0,1,2,6,9],task_entri:0,task_id:[0,1,2,5],task_typ:5,task_view:[0,9],taskstatu:5,taskview:5,tell:3,temporari:10,them:[0,1],thi:[0,1,3,5,7,8,10],thread:0,three:7,throughout:7,todo:10,track:7,transfer:10,tutori:10,two:7,type:[0,1,2,3,5,6],uid:3,under:[7,10],union:5,uniqu:[1,3],unknown:1,until:[1,5],updat:[3,5,7],update_sample_posit:3,update_statu:5,update_task_depend:5,use:[1,7],user:7,util:[0,9],valid:3,valu:[0,1,2,5,7],valueerror:1,vertex:7,vertic:6,via:7,view:[1,3,5,7],wait:[5,7],warn:0,websit:7,well:1,what:7,when:[0,1,7],where:[0,7,10],which:[0,1,3,5,7],within:0,workflow:7,wrapper:0,wrong:0,wrote:0,you:[1,8,10]},titles:["alab_management package","alab_management.device_view package","alab_management.experiment_view package","alab_management.sample_view package","alab_management.scripts package","alab_management.task_view package","alab_management.utils package","Overview","Installation","alab_management","Quick Start"],titleterms:{For:8,alab_manag:[0,1,2,3,4,5,6,9],cleanup_lab:4,compil:7,config:0,content:[0,1,2,3,4,5,6],data:7,defin:10,definit:7,develop:8,devic:[1,10],device_view:1,executor:[0,7],experi:2,experiment_manag:0,experiment_view:2,graph_op:6,indic:7,instal:8,lab:7,launch_lab:4,logger:0,manag:7,modul:[0,1,2,3,4,5,6,7],module_op:6,overview:7,packag:[0,1,2,3,4,5,6],prerequisit:8,purpos:8,quick:10,reader:7,sampl:3,sample_view:3,schedul:7,script:[4,7],setup_lab:4,start:10,statu:7,storag:7,submodul:[0,1,2,3,4,5,6],subpackag:0,tabl:7,task:[5,7,10],task_view:5,util:6}})
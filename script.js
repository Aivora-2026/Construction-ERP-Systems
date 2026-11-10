const $=s=>document.querySelector(s);
const esc=s=>String(s??'').replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function ld(k,d){try{const v=JSON.parse(localStorage.getItem(k));return v??d}catch(e){return d}}
function sv(k,v){try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}}
const I={
en:{brand:'Bunyan PMS',employees:'Employees',payroll:'Payroll',invoices:'Invoices',journal:'Journal',reports:'Financial reports',job:'Job title',nat:'Nationality',n_saudi:'Saudi',n_expat:'Non-Saudi',idno:'ID / Iqama no.',iban:'IBAN',basic:'Basic salary',housing:'Housing allowance',transport:'Transport allowance',other:'Other allowances',gross:'Gross pay',month:'Month',gen:'Generate payroll',wps:'Bank file (CSV)',ot:'Overtime',ded:'Other deductions',ge:'GOSI (employee)',gr:'GOSI (employer)',net:'Net pay',paid:'Paid',unpaid:'Unpaid',pay:'Mark paid',ecost:'Employer cost',cfgT:'GOSI settings (% of basic + housing)',pe:'Saudi employee %',pr:'Saudi employer %',ex:'Non-Saudi employer %',cap:'Wage cap (SAR)',cfgN:'Defaults follow the standard GOSI rates. Check them against your GOSI account before paying. Changes apply to payroll generated afterwards.',no:'Invoice no.',st_draft:'Draft',st_sent:'Sent',st_paid:'Paid',st_overdue:'Overdue',debit:'Debit',credit:'Credit',rep1:'Project profitability',invoiced:'Invoiced (excl. VAT)',collected:'Collected (incl. VAT)',outst:'Outstanding',exp:'Costs (excl. VAT)',lab:'Payroll cost',profit:'Profit',margin:'Margin',rep2:'VAT summary (15%)',vout:'Output VAT (sales)',vin:'Input VAT (purchases)',vnet:'Net VAT payable',rep3:'Receivables aging',a0:'Not yet due',a1:'1-30 days overdue',a2:'31-60 days overdue',a3:'Over 60 days overdue',rep4:'Trial balance',account:'Account',k8:'Receivables',balanced:'Balanced',auto:'Invoices, expenses and paid payroll post to the ledger automatically. Add manual entries under Journal.',copy:'Copy this CSV or save it as a .csv file.',close:'Close',a_1000:'1000 Cash & bank',a_1100:'1100 Accounts receivable',a_1200:'1200 Materials inventory',a_1300:'1300 VAT input',a_2000:'2000 Accounts payable',a_2100:'2100 VAT output',a_2200:'2200 GOSI & payroll payable',a_3000:'3000 Owner equity',a_4000:'4000 Contract revenue',a_5000:'5000 Materials cost',a_5100:'5100 Labor & payroll',a_5200:'5200 Equipment cost',a_5300:'5300 Other project costs',materials:'Materials',unit:'Unit',supplier:'Supplier',planned:'Planned qty',received:'Received qty',used:'Used qty',stock:'In stock',uprice:'Unit price (excl. VAT)',cost:'Received cost',usage:'Usage',recv:'Receive',use:'Issue',qtyP:'Quantity',low:'Low stock',noStock:'Not enough stock on hand.',ok:'Confirm',k6:'Materials received',k7:'Low-stock items',u_m3:'m³',u_ton:'ton',u_bag:'bag',u_m2:'m²',u_pcs:'pcs',u_m:'m',dash:'Dashboard',projects:'Projects',tasks:'Tasks',expenses:'Expenses',subs:'Subcontractors',add:'Add',edit:'Edit',del:'Delete',save:'Save',cancel:'Cancel',search:'Search…',name:'Name',city:'City',client:'Client',budget:'Budget',progress:'Progress',status:'Status',start:'Start date',end:'End date',title:'Task',project:'Project',assignee:'Assignee',priority:'Priority',due:'Due date',desc:'Description',category:'Category',amount:'Amount (excl. VAT)',date:'Date',trade:'Trade',phone:'Phone',vat:'VAT 15%',total:'Total',sar:'SAR',lang:'العربية',light:'Light / dark',reset:'Reset demo data',confirm:'Delete this record?',confirmR:'Replace all data with the demo set?',empty:'Nothing here yet. Add your first record.',k1:'Total projects',k2:'Active projects',k3:'Total budget',k4:'Spent (incl. VAT)',k5:'Open tasks',bvs:'Spent against budget',bys:'Projects by status',actions:'Actions',tagline:'Saudi contracting, one workspace',
st_planning:'Planning',st_active:'Active',st_hold:'On hold',st_done:'Completed',st_todo:'To do',st_doing:'In progress',pr_high:'High',pr_med:'Medium',pr_low:'Low',cat_materials:'Materials',cat_labor:'Labor',cat_equipment:'Equipment',cat_permits:'Permits & fees',cat_transport:'Transport',tr_civil:'Civil works',tr_electrical:'Electrical',tr_plumbing:'Plumbing',tr_hvac:'HVAC',tr_finishing:'Finishing',c_riyadh:'Riyadh',c_jeddah:'Jeddah',c_makkah:'Makkah',c_madinah:'Madinah',c_dammam:'Dammam',c_khobar:'Al Khobar',c_tabuk:'Tabuk (NEOM)',c_abha:'Abha',c_jubail:'Jubail'},
ar:{brand:'بنيان',employees:'الموظفون',payroll:'الرواتب',invoices:'الفواتير',journal:'القيود اليومية',reports:'التقارير المالية',job:'المسمى الوظيفي',nat:'الجنسية',n_saudi:'سعودي',n_expat:'غير سعودي',idno:'رقم الهوية / الإقامة',iban:'الآيبان',basic:'الراتب الأساسي',housing:'بدل السكن',transport:'بدل النقل',other:'بدلات أخرى',gross:'إجمالي الراتب',month:'الشهر',gen:'إنشاء مسير الرواتب',wps:'ملف البنك (CSV)',ot:'عمل إضافي',ded:'خصومات أخرى',ge:'التأمينات (الموظف)',gr:'التأمينات (صاحب العمل)',net:'صافي الراتب',paid:'مدفوع',unpaid:'غير مدفوع',pay:'تأكيد الدفع',ecost:'تكلفة صاحب العمل',cfgT:'إعدادات التأمينات الاجتماعية (% من الأساسي + السكن)',pe:'السعودي: الموظف %',pr:'السعودي: صاحب العمل %',ex:'غير السعودي: صاحب العمل %',cap:'الحد الأقصى للأجر (ر.س)',cfgN:'القيم الافتراضية وفق النسب المعتادة للتأمينات. راجعها مع حسابك في التأمينات قبل السداد. التغييرات تنطبق على المسيرات المنشأة بعدها.',no:'رقم الفاتورة',st_draft:'مسودة',st_sent:'مرسلة',st_paid:'مدفوعة',st_overdue:'متأخرة',debit:'مدين',credit:'دائن',rep1:'ربحية المشاريع',invoiced:'المفوتر (قبل الضريبة)',collected:'المحصّل (شامل الضريبة)',outst:'المستحق',exp:'التكاليف (قبل الضريبة)',lab:'تكلفة الرواتب',profit:'الربح',margin:'الهامش',rep2:'ملخص ضريبة القيمة المضافة (15%)',vout:'ضريبة المخرجات (المبيعات)',vin:'ضريبة المدخلات (المشتريات)',vnet:'صافي الضريبة المستحقة',rep3:'أعمار الذمم المدينة',a0:'غير مستحقة بعد',a1:'متأخرة 1-30 يوماً',a2:'متأخرة 31-60 يوماً',a3:'متأخرة أكثر من 60 يوماً',rep4:'ميزان المراجعة',account:'الحساب',k8:'الذمم المدينة',balanced:'متوازن',auto:'تُرحَّل الفواتير والمصروفات والرواتب المدفوعة تلقائياً إلى الدفتر. أضف القيود اليدوية من القيود اليومية.',copy:'انسخ ملف CSV أو احفظه بصيغة .csv.',close:'إغلاق',a_1000:'1000 النقد والبنك',a_1100:'1100 الذمم المدينة',a_1200:'1200 مخزون المواد',a_1300:'1300 ضريبة المدخلات',a_2000:'2000 الذمم الدائنة',a_2100:'2100 ضريبة المخرجات',a_2200:'2200 مستحقات التأمينات والرواتب',a_3000:'3000 حقوق الملكية',a_4000:'4000 إيرادات العقود',a_5000:'5000 تكلفة المواد',a_5100:'5100 العمالة والرواتب',a_5200:'5200 تكلفة المعدات',a_5300:'5300 تكاليف مشاريع أخرى',materials:'المواد',unit:'الوحدة',supplier:'المورّد',planned:'الكمية المخططة',received:'الكمية المستلمة',used:'الكمية المستخدمة',stock:'المتوفر بالمخزون',uprice:'سعر الوحدة (قبل الضريبة)',cost:'تكلفة المستلم',usage:'الاستهلاك',recv:'استلام',use:'صرف للموقع',qtyP:'الكمية',low:'مخزون منخفض',noStock:'الكمية المتوفرة غير كافية.',ok:'تأكيد',k6:'قيمة المواد المستلمة',k7:'أصناف منخفضة المخزون',u_m3:'م³',u_ton:'طن',u_bag:'كيس',u_m2:'م²',u_pcs:'قطعة',u_m:'م',dash:'لوحة المؤشرات',projects:'المشاريع',tasks:'المهام',expenses:'المصروفات',subs:'مقاولو الباطن',add:'إضافة',edit:'تعديل',del:'حذف',save:'حفظ',cancel:'إلغاء',search:'بحث…',name:'الاسم',city:'المدينة',client:'العميل',budget:'الميزانية',progress:'نسبة الإنجاز',status:'الحالة',start:'تاريخ البدء',end:'تاريخ الانتهاء',title:'المهمة',project:'المشروع',assignee:'المسؤول',priority:'الأولوية',due:'تاريخ الاستحقاق',desc:'الوصف',category:'التصنيف',amount:'المبلغ (قبل الضريبة)',date:'التاريخ',trade:'التخصص',phone:'الجوال',vat:'ضريبة القيمة المضافة 15%',total:'الإجمالي',sar:'ر.س',lang:'English',light:'فاتح / داكن',reset:'استعادة البيانات التجريبية',confirm:'هل تريد حذف هذا السجل؟',confirmR:'استبدال كل البيانات بالبيانات التجريبية؟',empty:'لا توجد سجلات بعد. أضف أول سجل.',k1:'إجمالي المشاريع',k2:'المشاريع الجارية',k3:'إجمالي الميزانية',k4:'المصروف (شامل الضريبة)',k5:'المهام المفتوحة',bvs:'المصروف مقابل الميزانية',bys:'المشاريع حسب الحالة',actions:'إجراءات',tagline:'إدارة المقاولات السعودية في مكان واحد',
st_planning:'قيد التخطيط',st_active:'جاري',st_hold:'متوقف',st_done:'مكتمل',st_todo:'للتنفيذ',st_doing:'قيد التنفيذ',pr_high:'عالية',pr_med:'متوسطة',pr_low:'منخفضة',cat_materials:'مواد',cat_labor:'عمالة',cat_equipment:'معدات',cat_permits:'تراخيص ورسوم',cat_transport:'نقل',tr_civil:'أعمال مدنية',tr_electrical:'كهرباء',tr_plumbing:'سباكة',tr_hvac:'تكييف وتبريد',tr_finishing:'تشطيبات',c_riyadh:'الرياض',c_jeddah:'جدة',c_makkah:'مكة المكرمة',c_madinah:'المدينة المنورة',c_dammam:'الدمام',c_khobar:'الخبر',c_tabuk:'تبوك (نيوم)',c_abha:'أبها',c_jubail:'الجبيل'}};
let lang=ld('lang','ar'),view='dash',q='';
const t=k=>I[lang][k]??k;
const L=(o,f)=>o?(o[f+'_'+lang]||o[f+'_en']||o[f+'_ar']||''):'';
const m=n=>Number(n||0).toLocaleString(lang==='ar'?'ar-SA-u-nu-latn':'en-US',{maximumFractionDigits:2})+' '+t('sar');
const C=['riyadh','jeddah','makkah','madinah','dammam','khobar','tabuk','abha','jubail'];
const ACC=['1000','1100','1200','1300','2000','2100','2200','3000','4000','5000','5100','5200','5300'];
const S={
projects:{f:[['name','bi'],['city','sel',C,'c_'],['client','bi'],['budget','num'],['progress','num'],['status','sel',['planning','active','hold','done'],'st_'],['start','date'],['end','date']],
 c:[['name','bi'],['city','tag','c_'],['client','bi'],['budget','money'],['progress','pct'],['status','tag','st_'],['end','date']]},
tasks:{f:[['title','bi'],['project','proj'],['assignee','bi'],['priority','sel',['high','med','low'],'pr_'],['status','sel',['todo','doing','done'],'st_'],['due','date']],
 c:[['title','bi'],['project','proj'],['assignee','bi'],['priority','tag','pr_'],['status','tag','st_'],['due','date']]},
expenses:{f:[['desc','bi'],['project','proj'],['category','sel',['materials','labor','equipment','permits','transport'],'cat_'],['amount','num'],['date','date']],
 c:[['date','date'],['desc','bi'],['project','proj'],['category','tag','cat_'],['amount','money'],['vat','vat'],['total','tot']]},
materials:{f:[['name','bi'],['project','proj'],['unit','sel',['m3','ton','bag','m2','pcs','m'],'u_'],['supplier','bi'],['planned','num'],['received','num'],['used','num'],['uprice','num']],
 c:[['name','bi'],['project','proj'],['unit','tag','u_'],['supplier','bi'],['planned','qty'],['received','qty'],['used','qty'],['stock','stock'],['usage','upct'],['cost','cost']]},
employees:{f:[['name','bi'],['job','bi'],['nat','sel',['saudi','expat'],'n_'],['idno','text'],['iban','text'],['project','proj'],['basic','num'],['housing','num'],['transport','num'],['other','num']],
 c:[['name','bi'],['job','bi'],['nat','tag','n_'],['project','proj'],['basic','money'],['housing','money'],['gross','gross']]},
invoices:{f:[['no','text'],['project','proj'],['date','date'],['due','date'],['amount','num'],['status','sel',['draft','sent','paid'],'st_']],
 c:[['no','text'],['project','proj'],['date','date'],['due','date'],['amount','money'],['vat','vat'],['total','tot'],['status','istat']]},
journal:{f:[['date','date'],['desc','bi'],['debit','sel',ACC,'a_'],['credit','sel',ACC,'a_'],['amount','num']],
 c:[['date','date'],['desc','bi'],['debit','acc'],['credit','acc'],['amount','money']]},
subs:{f:[['name','bi'],['trade','sel',['civil','electrical','plumbing','hvac','finishing'],'tr_'],['project','proj'],['phone','text']],
 c:[['name','bi'],['trade','tag','tr_'],['project','proj'],['phone','ph']]}};
const uid=()=>Date.now().toString(36)+Math.random().toString(36).slice(2,6);
const CFG0={pe:9.75,pr:11.75,ex:2,cap:45000};
const today=new Date().toISOString().slice(0,10);
const r2=n=>Math.round(n*100)/100;
function mkSlip(e,month,c){const w=Math.min(e.basic+e.housing,c.cap),sa=e.nat==='saudi',gross=e.basic+e.housing+e.transport+e.other,ge=sa?r2(w*c.pe/100):0;
 return{id:uid(),month,emp:e.id,gross,ot:0,ded:0,ge,gr:r2(w*(sa?c.pr:c.ex)/100),net:r2(gross-ge),paid:false};}
function recalc(s){s.net=r2(s.gross+s.ot-s.ge-s.ded);}
function seed(){
const p=[
['Riyadh Metro Plaza','ساحة محطة المترو بالرياض','riyadh','Government entity','جهة حكومية',48e6,62,'active','2025-02-01','2027-03-30'],
['Jeddah Waterfront Towers','أبراج الواجهة البحرية بجدة','jeddah','Private developer','مطور عقاري خاص',120e6,35,'active','2025-09-15','2028-06-30'],
['NEOM Logistics Hub','المركز اللوجستي في نيوم','tabuk','Giga-project client','عميل مشروع عملاق',85e6,18,'planning','2026-06-01','2028-12-31'],
['Dammam Industrial Warehouses','مستودعات الدمام الصناعية','dammam','Industrial group','مجموعة صناعية',22e6,100,'done','2024-01-10','2025-11-20'],
['Makkah Hospital Extension','توسعة مستشفى في مكة المكرمة','makkah','Health holding','تجمع صحي',60e6,48,'hold','2025-04-01','2027-09-30']
].map((a,i)=>({id:'p'+i,name_en:a[0],name_ar:a[1],city:a[2],client_en:a[3],client_ar:a[4],budget:a[5],progress:a[6],status:a[7],start:a[8],end:a[9]}));
const P=i=>p[i].id;
const emps=[['Abdullah Al-Qahtani','عبدالله القحطاني','Project Manager','مدير مشروع','saudi','1098765432',0,22000,5500,1500,0],['Mohammed Al-Otaibi','محمد العتيبي','Site Engineer','مهندس موقع','saudi','1087654321',1,12000,3000,1000,0],['Rashed Khan','راشد خان','Foreman','مشرف عمال','expat','2456789012',0,4500,1125,300,200],['Ahmed Hassan','أحمد حسن','Electrician','فني كهرباء','expat','2345678901',1,3500,875,300,150],['Sultan Al-Dosari','سلطان الدوسري','HSE Officer','مسؤول سلامة','saudi','1076543210',4,9000,2250,800,0],['Imran Ali','عمران علي','Mason','بنّاء','expat','2567890123',0,2800,700,250,0]].map(a=>({id:uid(),name_en:a[0],name_ar:a[1],job_en:a[2],job_ar:a[3],nat:a[4],idno:a[5],iban:'',project:P(a[6]),basic:a[7],housing:a[8],transport:a[9],other:a[10]}));
return{projects:p,cfg:{...CFG0},employees:emps,payroll:emps.map(e=>({...mkSlip(e,'2026-10',CFG0),paid:true})),
invoices:[['INV-2026-001',0,'2026-08-31','2026-09-30',6000000,'paid'],['INV-2026-002',1,'2026-09-30','2026-10-30',9500000,'sent'],['INV-2026-003',0,'2026-10-31','2026-11-30',4200000,'sent'],['INV-2026-004',4,'2026-10-15','2026-11-15',3100000,'draft'],['INV-2026-005',3,'2025-10-31','2025-11-30',2200000,'paid']].map(a=>({id:uid(),no:a[0],project:P(a[1]),date:a[2],due:a[3],amount:a[4],status:a[5],paidOn:a[3]})),
journal:[['2026-01-01','Owner capital injection','إيداع رأس مال المالك','1000','3000',5000000],['2026-10-05','Materials bought on credit','مشتريات مواد بالأجل','1200','2000',750000]].map(a=>({id:uid(),date:a[0],desc_en:a[1],desc_ar:a[2],debit:a[3],credit:a[4],amount:a[5]})),
materials:[['Ready-mix concrete C40','خرسانة جاهزة C40',0,'m3','Eastern Concrete Supply','الشرقية لتوريد الخرسانة',4000,3200,2900,285],['Rebar Grade 60','حديد تسليح درجة 60',0,'ton','Najd Steel Trading','نجد لتجارة الحديد',600,520,330,2900],['Cement bags (OPC)','أكياس أسمنت بورتلاندي',1,'bag','Western Building Materials','الغربية لمواد البناء',20000,15000,14200,17],['Ceramic tiles 60x60','بلاط سيراميك 60×60',1,'m2','Gulf Finishing Supplies','الخليج لمستلزمات التشطيب',9000,2000,300,55],['Steel sections IPE','مقاطع حديد IPE',2,'ton','Najd Steel Trading','نجد لتجارة الحديد',300,0,0,3400],['Electrical cable 4mm','كابل كهربائي 4 ملم',4,'m','Red Sea Electrical','البحر الأحمر للكهرباء',12000,12000,3000,9]].map(a=>({id:uid(),name_en:a[0],name_ar:a[1],project:P(a[2]),unit:a[3],supplier_en:a[4],supplier_ar:a[5],planned:a[6],received:a[7],used:a[8],uprice:a[9]})),
tasks:[['Approve rebar shop drawings','اعتماد مخططات تسليح الحديد',0,'Faisal','فيصل','high','doing','2026-11-10'],['Pour level 12 slab','صب سقف الدور الثاني عشر',1,'Noura','نورة','high','todo','2026-11-18'],['Submit Balady permit renewal','تجديد رخصة بلدي',4,'Khalid','خالد','med','todo','2026-11-25'],['Site safety inspection','تفتيش السلامة بالموقع',0,'Sara','سارة','med','done','2026-10-28'],['Soil survey report','تقرير مسح التربة',2,'Omar','عمر','low','doing','2026-12-05'],['Handover snag list','قائمة الملاحظات للتسليم',3,'Huda','هدى','low','done','2025-11-15']].map(a=>({id:uid(),title_en:a[0],title_ar:a[1],project:P(a[2]),assignee_en:a[3],assignee_ar:a[4],priority:a[5],status:a[6],due:a[7]})),
expenses:[['Rebar supply','توريد حديد التسليح',0,'materials',1850000,'2026-10-04'],['Crane rental','إيجار رافعة',1,'equipment',420000,'2026-10-12'],['Site labor payroll','رواتب عمالة الموقع',1,'labor',960000,'2026-10-31'],['Municipality fees','رسوم الأمانة',4,'permits',75000,'2026-09-22'],['Concrete delivery','توريد الخرسانة',0,'materials',2300000,'2026-10-18'],['Equipment transport','نقل المعدات',2,'transport',130000,'2026-10-25']].map(a=>({id:uid(),desc_en:a[0],desc_ar:a[1],project:P(a[2]),category:a[3],amount:a[4],date:a[5]})),
subs:[['Al Rajhi Electrical Works','الراجحي للأعمال الكهربائية','electrical',0,'0501234567'],['Najd Plumbing Co.','شركة نجد للسباكة','plumbing',1,'0559876543'],['Gulf HVAC Systems','أنظمة الخليج للتكييف','hvac',1,'0533344556'],['Red Sea Finishing','البحر الأحمر للتشطيبات','finishing',4,'0541122334']].map(a=>({id:uid(),name_en:a[0],name_ar:a[1],trade:a[2],project:P(a[3]),phone:a[4]}))}}
let D=ld('data',null)||seed();
{const f=seed();['materials','employees','payroll','invoices','journal','cfg'].forEach(k=>{if(!D[k])D[k]=f[k]});}
let pm=ld('pm',null)||D.payroll.map(s=>s.month).sort().pop()||today.slice(0,7);
const save=()=>sv('data',D);
const nq=n=>Number(n||0).toLocaleString(lang==='ar'?'ar-SA-u-nu-latn':'en-US',{maximumFractionDigits:2});
const low=r=>r.planned>0&&r.used<r.planned&&(r.received-r.used)<=0.15*r.planned;
const PN=id=>L(D.projects.find(x=>x.id==id),'name')||'—';
function cell(r,[k,ty,p]){
 if(ty==='bi')return esc(L(r,k));
 if(ty==='text')return esc(r[k]);
 if(ty==='ph')return '<span dir="ltr">'+esc(r[k])+'</span>';
 if(ty==='date')return '<span class="num">'+esc(r[k]||'—')+'</span>';
 if(ty==='money')return '<span class="num">'+m(r[k])+'</span>';
 if(ty==='vat')return '<span class="num">'+m(r.amount*.15)+'</span>';
 if(ty==='tot')return '<b class="num">'+m(r.amount*1.15)+'</b>';
 if(ty==='pct')return '<span class="bar"><i style="width:'+Math.min(100,r[k])+'%"></i></span><small>'+r[k]+'%</small>';
 if(ty==='tag')return '<span class="tag '+esc(r[k])+'">'+t(p+r[k])+'</span>';
 if(ty==='gross')return '<span class="num">'+m(r.basic+r.housing+r.transport+r.other)+'</span>';
 if(ty==='acc')return esc(t('a_'+r[k]));
 if(ty==='istat'){const s=r.status==='sent'&&r.due<today?'overdue':r.status;return '<span class="tag '+s+'">'+t('st_'+s)+'</span>';}
 if(ty==='qty')return '<span class="num">'+nq(r[k])+'</span>';
 if(ty==='stock'){const lw=low(r);return '<b class="num'+(lw?' lowq':'')+'">'+nq(r.received-r.used)+'</b>'+(lw?' <span class="tag hold">'+t('low')+'</span>':'');}
 if(ty==='upct'){const p=r.planned?Math.round(r.used/r.planned*100):0;return '<span class="bar"><i style="width:'+Math.min(100,p)+'%"></i></span><small>'+p+'%</small>';}
 if(ty==='cost')return '<span class="num">'+m(r.received*r.uprice)+'</span>';
 if(ty==='proj')return esc(PN(r[k]));
 return '';}
function table(){
 const s=S[view],rows=D[view].filter(r=>!q||JSON.stringify(r).toLowerCase().includes(q.toLowerCase()));
 if(!rows.length)return '<div class="wrap"><div class="empty">'+t('empty')+'</div></div>';
 return '<div class="wrap"><table><thead><tr>'+s.c.map(c=>'<th>'+t(c[0])+'</th>').join('')+'<th>'+t('actions')+'</th></tr></thead><tbody>'+
 rows.map(r=>'<tr>'+s.c.map(c=>'<td>'+cell(r,c)+'</td>').join('')+'<td>'+(view==='invoices'&&r.status!=='paid'?'<button class="btn s sm" data-ip="'+r.id+'">'+t('pay')+'</button> ':'')+(view==='materials'?'<button class="btn s sm" data-r="'+r.id+'">'+t('recv')+'</button> <button class="btn s sm" data-u="'+r.id+'">'+t('use')+'</button> ':'')+'<button class="btn s sm" data-e="'+r.id+'">'+t('edit')+'</button> <button class="btn d sm" data-d="'+r.id+'">'+t('del')+'</button></td></tr>').join('')+'</tbody></table></div>';}
function dash(){
 const P=D.projects,spent=id=>D.expenses.filter(e=>!id||e.project==id).reduce((a,e)=>a+e.amount*1.15,0);
 const k=[[t('k1'),P.length],[t('k2'),P.filter(p=>p.status==='active').length],[t('k3'),m(P.reduce((a,p)=>a+p.budget,0))],[t('k4'),m(spent())],[t('k5'),D.tasks.filter(x=>x.status!=='done').length],[t('k6'),m(D.materials.reduce((a,x)=>a+x.received*x.uprice,0))],[t('k7'),D.materials.filter(low).length],[t('k8'),m(D.invoices.filter(i=>i.status==='sent').reduce((a,i)=>a+i.amount*1.15,0))]];
 const bars=P.map(p=>{const s=spent(p.id),pc=p.budget?Math.round(s/p.budget*100):0;return '<div class="row"><div class="l"><span>'+esc(L(p,'name'))+'</span><span class="num">'+m(s)+' / '+m(p.budget)+'</span></div><span class="bar'+(pc>100?' over':'')+'"><i style="width:'+Math.min(100,pc)+'%"></i></span></div>'}).join('');
 const st=['active','planning','hold','done'].map(s=>'<div class="row"><div class="l"><span class="tag '+s+'">'+t('st_'+s)+'</span><b class="num">'+P.filter(p=>p.status===s).length+'</b></div></div>').join('');
 return '<div class="kpis">'+k.map(x=>'<div class="kpi"><small>'+x[0]+'</small><b>'+x[1]+'</b></div>').join('')+'</div><div class="grid2"><div class="panel"><h3>'+t('bvs')+'</h3>'+bars+'</div><div class="panel"><h3>'+t('bys')+'</h3>'+st+'</div></div>';}
function render(){
 document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
 $('#brand').textContent=t('brand');
 $('#nav').innerHTML=[['dash','▦'],['projects','◫'],['materials','▥'],['tasks','✓'],['expenses','﷼'],['subs','⚒'],['employees','☻'],['payroll','▤'],['invoices','▧'],['journal','▨'],['reports','▩']].map(([v,i])=>'<button data-v="'+v+'" class="'+(v===view?'on':'')+'"><span aria-hidden="true">'+i+'</span>'+t(v)+'</button>').join('');
 $('#bl').textContent='🌐 '+t('lang');$('#bt').textContent='◐ '+t('light');$('#br').textContent='↺ '+t('reset');
 const loc=lang==='ar'?'ar-SA':'en-GB',now=new Date();
 const hij=now.toLocaleDateString(loc+'-u-ca-islamic-umalqura-nu-latn',{day:'numeric',month:'long',year:'numeric'}),gr=now.toLocaleDateString(loc+'-u-nu-latn',{day:'numeric',month:'long',year:'numeric'});
 let h='<header class="top"><div><h1>'+t(view)+'</h1><div class="date">'+t('tagline')+'</div></div><div class="date">'+hij+'<br>'+gr+'</div></header>';
 if(view==='dash')h+=dash();
 else if(view==='payroll')h+=payView();
 else if(view==='reports')h+=repView();
 else h+='<div class="tools"><input id="q" type="search" placeholder="'+t('search')+'" value="'+esc(q)+'"><button class="btn p" data-a="1">+ '+t('add')+'</button></div><div id="tb">'+table()+'</div>';
 $('#main').innerHTML=h;
 bindPay();
 const qi=$('#q');if(qi)qi.oninput=e=>{q=e.target.value;$('#tb').innerHTML=table()};}
function form(id){
 const s=S[view],r=id?D[view].find(x=>x.id==id):{};
 const lab=(f,v,pre)=>pre?t(pre+v):v;
 const inp=([k,ty,o,pre])=>{
  const v=(x)=>esc(r[x]??'');
  if(ty==='bi')return '<label>'+t(k)+' (EN)<input name="'+k+'_en" value="'+v(k+'_en')+'" dir="ltr"></label><label>'+t(k)+' (عربي)<input name="'+k+'_ar" value="'+v(k+'_ar')+'" dir="rtl"></label>';
  if(ty==='sel'||ty==='proj'){const opts=ty==='proj'?D.projects.map(p=>[p.id,L(p,'name')]):o.map(x=>[x,t(pre+x)]);
   return '<label>'+t(k)+'<select name="'+k+'" required>'+opts.map(([a,b])=>'<option value="'+esc(a)+'"'+(r[k]==a?' selected':'')+'>'+esc(b)+'</option>').join('')+'</select></label>';}
  if(ty==='num')return '<label>'+t(k)+'<input type="number" min="0" step="any" name="'+k+'" value="'+v(k)+'" required></label>';
  if(ty==='date')return '<label>'+t(k)+'<input type="date" name="'+k+'" value="'+v(k)+'"></label>';
  return '<label>'+t(k)+'<input name="'+k+'" value="'+v(k)+'" dir="ltr"></label>';};
 $('#fm').innerHTML='<h3>'+t(id?'edit':'add')+' – '+t(view)+'</h3>'+s.f.map(inp).join('')+'<div class="acts"><button type="button" class="btn s" id="cx">'+t('cancel')+'</button><button class="btn p">'+t('save')+'</button></div>';
 $('#fm').onsubmit=e=>{e.preventDefault();
  const o=Object.fromEntries(new FormData(e.target));
  s.f.forEach(f=>{if(f[1]==='num')o[f[0]]=Math.max(0,parseFloat(o[f[0]])||0);});
  if(view==='projects')o.progress=Math.min(100,o.progress);
  if(id)Object.assign(r,o);else D[view].unshift({id:uid(),...o});
  save();$('#dlg').close();render();};
 $('#cx').onclick=()=>$('#dlg').close();
 $('#dlg').showModal();}
document.addEventListener('click',e=>{
 const b=e.target.closest('button');if(!b)return;
 if(b.dataset.v){view=b.dataset.v;q='';render();}
 else if(b.dataset.a)form();
 else if(b.dataset.ip){const i=D.invoices.find(x=>x.id==b.dataset.ip);i.status='paid';i.paidOn=today;save();render();}
 else if(b.dataset.gen){D.employees.forEach(e=>{if(!D.payroll.some(s=>s.month===pm&&s.emp===e.id))D.payroll.push(mkSlip(e,pm,D.cfg))});save();render();}
 else if(b.dataset.sp){D.payroll.find(x=>x.id==b.dataset.sp).paid=true;save();render();}
 else if(b.dataset.se)slipForm(D.payroll.find(x=>x.id==b.dataset.se));
 else if(b.dataset.sd)ask(t('confirm'),()=>{D.payroll=D.payroll.filter(x=>x.id!=b.dataset.sd);save();render();});
 else if(b.dataset.wps)wps();
 else if(b.dataset.r||b.dataset.u)qtyForm(D.materials.find(x=>x.id==(b.dataset.r||b.dataset.u)),b.dataset.r?'recv':'use');
 else if(b.dataset.e)form(b.dataset.e);
 else if(b.dataset.d)ask(t('confirm'),()=>{D[view]=D[view].filter(x=>x.id!=b.dataset.d);save();render();});
 else if(b.id==='bl'){lang=lang==='ar'?'en':'ar';sv('lang',lang);render();}
 else if(b.id==='bt'){const r=document.documentElement,dk=r.dataset.theme?r.dataset.theme==='dark':matchMedia('(prefers-color-scheme:dark)').matches;r.dataset.theme=dk?'light':'dark';sv('theme',r.dataset.theme);}
 else if(b.id==='br')ask(t('confirmR'),()=>{D=seed();save();render();});
});
function ask(msg,cb){
 $('#fm').innerHTML='<h3>'+esc(msg)+'</h3><div class="acts"><button type="button" class="btn s" id="cx">'+t('cancel')+'</button><button type="button" class="btn d" id="ok">'+t('ok')+'</button></div>';
 $('#fm').onsubmit=e=>e.preventDefault();
 $('#cx').onclick=()=>$('#dlg').close();
 $('#ok').onclick=()=>{$('#dlg').close();cb();};
 $('#dlg').showModal();}
function qtyForm(rec,mode){
 $('#fm').innerHTML='<h3>'+t(mode)+' – '+esc(L(rec,'name'))+'</h3><label>'+t('qtyP')+' ('+t('u_'+rec.unit)+')<input type="number" name="n" min="0" step="any" required></label><div id="er" style="color:var(--bad);font-size:13px"></div><div class="acts"><button type="button" class="btn s" id="cx">'+t('cancel')+'</button><button class="btn p">'+t('save')+'</button></div>';
 $('#cx').onclick=()=>$('#dlg').close();
 $('#fm').onsubmit=e=>{e.preventDefault();const n=parseFloat(e.target.n.value);if(!(n>0))return;
  if(mode==='use'&&n>rec.received-rec.used){$('#er').textContent=t('noStock');return;}
  rec[mode==='use'?'used':'received']+=n;save();$('#dlg').close();render();};
 $('#dlg').showModal();}
const money=n=>m(n);
const T=(h,rows)=>'<div class="wrap"><table><thead><tr>'+h.map(x=>'<th>'+x+'</th>').join('')+'</tr></thead><tbody>'+rows.map(r=>'<tr>'+r.map(c=>'<td class="num">'+c+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
const H=s=>'<h3 style="margin:24px 0 10px">'+s+'</h3>';
function payView(){
 const sl=D.payroll.filter(s=>s.month===pm),sum=f=>sl.reduce((a,s)=>a+f(s),0),c=D.cfg;
 const k=[[t('gross'),m(sum(s=>s.gross+s.ot))],[t('net'),m(sum(s=>s.net))],['GOSI',m(sum(s=>s.ge+s.gr))],[t('ecost'),m(sum(s=>s.gross+s.ot+s.gr))]];
 let h='<div class="kpis">'+k.map(x=>'<div class="kpi"><small>'+x[0]+'</small><b>'+x[1]+'</b></div>').join('')+'</div>';
 h+='<div class="tools"><input type="month" id="pm" value="'+esc(pm)+'" style="max-width:200px"><button class="btn p" data-gen="1">'+t('gen')+'</button><button class="btn s" data-wps="1">'+t('wps')+'</button></div>';
 h+=sl.length?'<div class="wrap"><table><thead><tr>'+['employee','gross','ot','ge','ded','net','gr','status','actions'].map(x=>'<th>'+t(x==='employee'?'name':x)+'</th>').join('')+'</tr></thead><tbody>'+sl.map(s=>{const e=D.employees.find(x=>x.id==s.emp);
  return '<tr><td>'+esc(L(e,'name')||'—')+'</td><td class="num">'+m(s.gross)+'</td><td class="num">'+m(s.ot)+'</td><td class="num">'+m(s.ge)+'</td><td class="num">'+m(s.ded)+'</td><td class="num"><b>'+m(s.net)+'</b></td><td class="num">'+m(s.gr)+'</td><td><span class="tag '+(s.paid?'paid':'sent')+'">'+t(s.paid?'paid':'unpaid')+'</span></td><td>'+(s.paid?'':'<button class="btn s sm" data-sp="'+s.id+'">'+t('pay')+'</button> <button class="btn s sm" data-se="'+s.id+'">'+t('edit')+'</button> ')+'<button class="btn d sm" data-sd="'+s.id+'">'+t('del')+'</button></td></tr>';}).join('')+'</tbody></table></div>':'<div class="wrap"><div class="empty">'+t('empty')+'</div></div>';
 return h+'<div class="panel" style="margin-top:16px"><h3>'+t('cfgT')+'</h3><div class="kpis">'+['pe','pr','ex','cap'].map(k=>'<label>'+t(k)+'<input type="number" step="any" min="0" data-cfg="'+k+'" value="'+c[k]+'"></label>').join('')+'</div><div class="date">'+t('cfgN')+'</div></div>';}
function bindPay(){const a=$('#pm');if(a)a.onchange=e=>{pm=e.target.value||pm;sv('pm',pm);render();};
 document.querySelectorAll('[data-cfg]').forEach(i=>i.onchange=e=>{D.cfg[i.dataset.cfg]=parseFloat(e.target.value)||0;save();});}
function slipForm(s){
 const e=D.employees.find(x=>x.id==s.emp);
 $('#fm').innerHTML='<h3>'+t('edit')+' – '+esc(L(e,'name'))+'</h3><label>'+t('ot')+'<input type="number" name="ot" min="0" step="any" value="'+s.ot+'"></label><label>'+t('ded')+'<input type="number" name="ded" min="0" step="any" value="'+s.ded+'"></label><div class="acts"><button type="button" class="btn s" id="cx">'+t('cancel')+'</button><button class="btn p">'+t('save')+'</button></div>';
 $('#cx').onclick=()=>$('#dlg').close();
 $('#fm').onsubmit=ev=>{ev.preventDefault();s.ot=Math.max(0,parseFloat(ev.target.ot.value)||0);s.ded=Math.max(0,parseFloat(ev.target.ded.value)||0);recalc(s);save();$('#dlg').close();render();};
 $('#dlg').showModal();}
function wps(){
 const rows=D.payroll.filter(s=>s.month===pm).map(s=>{const e=D.employees.find(x=>x.id==s.emp)||{};return [e.idno||'',e.name_en||'',e.iban||'',s.net.toFixed(2),pm].map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(',');});
 const csv='ID,Name,IBAN,Net pay (SAR),Month\n'+rows.join('\n');
 $('#fm').innerHTML='<h3>'+t('wps')+'</h3><div class="date">'+t('copy')+'</div><textarea readonly rows="9" style="width:100%;font:12px monospace;direction:ltr;background:var(--card);color:var(--tx);border:1px solid var(--bd)">'+esc(csv)+'</textarea><div class="acts"><a class="btn p" download="payroll-'+esc(pm)+'.csv" href="data:text/csv;charset=utf-8,'+encodeURIComponent('\ufeff'+csv)+'" style="text-decoration:none">CSV</a><button type="button" class="btn s" id="cx">'+t('close')+'</button></div>';
 $('#cx').onclick=()=>$('#dlg').close();$('#fm').onsubmit=e=>e.preventDefault();$('#dlg').showModal();}
function entries(){
 const e=[],add=(date,desc,dr,cr,amt)=>{if(amt)e.push({date,desc,dr,cr,amt});};
 D.invoices.filter(i=>i.status!=='draft').forEach(i=>{add(i.date,i.no,'1100','4000',i.amount);add(i.date,i.no+' VAT','1100','2100',r2(i.amount*.15));if(i.status==='paid')add(i.paidOn||i.due,i.no,'1000','1100',r2(i.amount*1.15));});
 const ca={materials:'5000',labor:'5100',equipment:'5200'};
 D.expenses.forEach(x=>{add(x.date,L(x,'desc'),ca[x.category]||'5300','1000',x.amount);add(x.date,L(x,'desc')+' VAT','1300','1000',r2(x.amount*.15));});
 D.payroll.filter(s=>s.paid).forEach(s=>{add(s.month+'-28','Payroll','5100','1000',s.net);add(s.month+'-28','GOSI & deductions','5100','2200',r2(s.gross+s.ot-s.net+s.gr));});
 D.journal.forEach(j=>add(j.date,L(j,'desc'),j.debit,j.credit,j.amount));
 return e;}
function repView(){
 const live=D.invoices.filter(i=>i.status!=='draft'),sm=(a,f)=>a.reduce((x,y)=>x+f(y),0),dd=(a,b)=>Math.floor((new Date(a)-new Date(b))/864e5);
 const pr=D.projects.map(p=>{const iv=live.filter(i=>i.project==p.id),inv=sm(iv,i=>i.amount),col=sm(iv.filter(i=>i.status==='paid'),i=>i.amount*1.15),out=sm(iv.filter(i=>i.status==='sent'),i=>i.amount*1.15),
  ex=sm(D.expenses.filter(x=>x.project==p.id),x=>x.amount),lb=sm(D.payroll.filter(s=>(D.employees.find(e=>e.id==s.emp)||{}).project==p.id),s=>s.gross+s.ot+s.gr),pf=inv-ex-lb;
  return [esc(L(p,'name')),money(inv),money(col),money(out),money(ex),money(lb),'<b'+(pf<0?' style="color:var(--bad)"':'')+'>'+money(pf)+'</b>',inv?Math.round(pf/inv*100)+'%':'—'];});
 const vo=sm(live,i=>i.amount*.15),vi=sm(D.expenses,x=>x.amount*.15);
 const ag=[0,0,0,0];live.filter(i=>i.status==='sent').forEach(i=>{const d=dd(today,i.due);ag[d<=0?0:d<=30?1:d<=60?2:3]+=i.amount*1.15;});
 const bal={};entries().forEach(x=>{(bal[x.dr]=bal[x.dr]||[0,0])[0]+=x.amount;(bal[x.cr]=bal[x.cr]||[0,0])[1]+=x.amount;});
 let td=0,tc=0;const tb=ACC.filter(a=>bal[a]).map(a=>{const n=bal[a][0]-bal[a][1];n>0?td+=n:tc-=n;return [t('a_'+a),n>0?money(n):'',n<0?money(-n):''];});
 tb.push(['<b>'+t('total')+' ('+(Math.abs(td-tc)<.01?t('balanced'):'!')+')</b>','<b>'+money(td)+'</b>','<b>'+money(tc)+'</b>']);
 return '<div class="date">'+t('auto')+'</div>'+H(t('rep1'))+T([t('project'),t('invoiced'),t('collected'),t('outst'),t('exp'),t('lab'),t('profit'),t('margin')],pr)
  +H(t('rep2'))+T([t('vout'),t('vin'),t('vnet')],[[money(vo),money(vi),'<b>'+money(vo-vi)+'</b>']])
  +H(t('rep3'))+T([t('a0'),t('a1'),t('a2'),t('a3')],[ag.map(money)])
  +H(t('rep4'))+T([t('account'),t('debit'),t('credit')],tb);}
const th=ld('theme',null);if(th)document.documentElement.dataset.theme=th;
render();

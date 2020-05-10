---
layout: base
title:  'Statistics of csubj:pass in UD_Arabic-PADT'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PADT: Relations: `csubj:pass`

This relation is a language-specific subtype of <tt><a href="ar_padt-dep-csubj.html">csubj</a></tt>.

1 nodes (0%) are attached to their parents as `csubj:pass`.

1 instances of `csubj:pass` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.

The following 1 pairs of parts of speech are connected with `csubj:pass`: <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-VERB.html">VERB</a></tt> (1; 100% instances).


~~~ conllu
# visual-style 27	bgColor:blue
# visual-style 27	fgColor:white
# visual-style 25	bgColor:blue
# visual-style 25	fgColor:white
# visual-style 25 27 csubj:pass	color:blue
1	المناقشون	مُنَاقِش	NOUN	N------P1D	Case=Nom|Definite=Def|Number=Plur	6	nsubj	6:nsubj	Vform=اَلمُنَاقِشُونَ|Gloss=debater,arguing|Root=n_q_^s|Translit=al-munāqišūna|LTranslit=munāqiš
2	ب	بِ	ADP	P---------	AdpType=Prep	3	case	3:case	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
3	الوقائع	وَقِيعَة	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	1	nmod	1:nmod:بِ:gen	Vform=اَلوَقَائِعِ|Gloss=incident,event|Root=w_q_`|Translit=al-waqāʾiʿi|LTranslit=waqīʿat
4	و	وَ	CCONJ	C---------	_	5	cc	5:cc	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
5	الأرقام	رَقم	NOUN	N------P1D	Case=Nom|Definite=Def|Number=Plur	3	conj	1:nmod:بِ:gen|3:conj	Vform=اَلأَرقَامُ|Gloss=number,numeral,record|Root=r_q_m|Translit=al-ʾarqāmu|LTranslit=raqm
6	ينطلقون	اِنطَلَق	VERB	VIIA-3MP--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=3|VerbForm=Fin|Voice=Act	0	root	0:root	Vform=يَنطَلِقُونَ|Gloss=take_off,be_sent_out|Root=.t_l_q|Translit=yanṭaliqūna|LTranslit=inṭalaq
7	من	مِن	ADP	P---------	AdpType=Prep	8	case	8:case	Vform=مِن|Gloss=from|Root=min|Translit=min|LTranslit=min
8	مقدمات	مُقَدَّمَة	NOUN	N------P2I	Case=Gen|Definite=Ind|Number=Plur	6	obl:arg	6:obl:arg:مِن:gen	Vform=مُقَدَّمَاتٍ|Gloss=preface,introduction,front_part|Root=q_d_m|Translit=muqaddamātin|LTranslit=muqaddamat
9	بسيطة	بَسِيط	ADJ	A-----FS2I	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	8	amod	8:amod	Vform=بَسِيطَةٍ|Gloss=simple,plain|Root=b_s_.t|Translit=basīṭatin|LTranslit=basīṭ
10	و	وَ	CCONJ	C---------	_	14	cc	14:cc	SpaceAfter=No|Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
11	.	.	PUNCT	G---------	_	14	punct	14:punct	SpaceAfter=No|Vform=.|Translit=.
12	.	.	PUNCT	G---------	_	14	punct	14:punct	SpaceAfter=No|Vform=.|Translit=.
13	.	.	PUNCT	G---------	_	14	punct	14:punct	Vform=.|Translit=.
14	صحيحة	صَحِيح	ADJ	A-----FS2I	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	9	conj	8:amod|9:conj	SpaceAfter=No|Vform=صَحِيحَةٍ|Gloss=true,correct|Root=.s_.h_.h|Translit=ṣaḥīḥatin|LTranslit=ṣaḥīḥ
15	:	:	PUNCT	G---------	_	14	punct	14:punct	Vform=:|Translit=:
16	المطلوب	مَطلُوب	ADJ	A-----MS1D	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	6	parataxis	6:parataxis	Vform=اَلمَطلُوبُ|Gloss=required,necessary,demanded|Root=.t_l_b|Translit=al-maṭlūbu|LTranslit=maṭlūb
17	بناء	بِنَاء	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	16	nsubj	16:nsubj	Vform=بِنَاءُ|Gloss=building,constructing|Root=b_n_y|Translit=bināʾu|LTranslit=bināʾ
18	دولة	دَولَة	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	17	nmod	17:nmod:gen	Vform=دَولَةٍ|Gloss=state,country|Root=d_w_l|Translit=dawlatin|LTranslit=dawlat
19	ذات	ذَات	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	18	nmod	18:nmod:gen	Vform=ذَاتِ|Gloss=self,being,essence|Root=_d|Translit=ḏāti|LTranslit=ḏāt
20	سيادة	سِيَادَة	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	19	nmod	19:nmod:gen	SpaceAfter=No|Vform=سِيَادَةٍ|Gloss=sovereignty,supremacy,Excellency|Root=s_w_d|Translit=siyādatin|LTranslit=siyādat
21	.	.	PUNCT	G---------	_	6	punct	6:punct	Vform=.|Translit=.
22	تحرير	تَحرِير	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	6	dep	6:dep	Vform=تَحرِيرُ|Gloss=liberation,liberating,editorship,editing|Root=.h_r_r|Translit=taḥrīru|LTranslit=taḥrīr
23	الأرض	أَرض	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	22	nmod	22:nmod:gen|25:nsubj:pass	Vform=اَلأَرضِ|Gloss=earth,territory,land|Root='_r_.d|Translit=al-ʾarḍi|LTranslit=ʾarḍ
24	التي	اَلَّذِي	DET	SR----FS2-	Case=Gen|Gender=Fem|Number=Sing|PronType=Rel	25	nsubj:pass	23:ref	Vform=اَلَّتِي|Gloss=that,which|Root=l|Translit=allatī|LTranslit=allaḏī
25	يُعرف	عَرَف	VERB	VIIP-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	23	acl:relcl	23:acl:relcl	Vform=يُعرَفُ|Gloss=know,recognize,be_aware,be_acquainted|Root=`_r_f|Translit=yuʿrafu|LTranslit=ʿaraf
26	متى	مَتَى	DET	S---------	_	27	obl	27:obl	Vform=مَتَى|Gloss=when|Root=m_t_y|Translit=matā|LTranslit=matā
27	يكتمل	اِكتَمَل	VERB	VIIA-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	25	csubj:pass	25:csubj:pass	Vform=يَكتَمِلُ|Gloss=be_completed,be_perfect,be_integral|Root=k_m_l|Translit=yaktamilu|LTranslit=iktamal
28	تحرير	تَحرِير	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	27	nsubj	27:nsubj	Vform=تَحرِيرُ|Gloss=liberation,liberating,editorship,editing|Root=.h_r_r|Translit=taḥrīru|LTranslit=taḥrīr
29	ها	هُوَ	PRON	SP---3FS2-	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	28	nmod	28:nmod:gen	Vform=هَا|Gloss=he,she,it|Translit=hā|LTranslit=huwa
30	،	،	PUNCT	G---------	_	29	punct	29:punct	Vform=،|Translit=,
31	و	وَ	CCONJ	C---------	_	32	cc	32:cc	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
32	المبادرة	مُبَادَرَة	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	22	conj	6:dep|22:conj	Vform=اَلمُبَادَرَةُ|Gloss=initiative,proposal|Root=b_d_r|Translit=al-mubādaratu|LTranslit=mubādarat
33	سريعاً	سَرِيع	ADJ	A-----MS4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	32	amod	32:amod	Vform=سَرِيعًا|Gloss=quick,prompt|Root=s_r_`|Translit=sarīʿan|LTranslit=sarīʿ
34	الى	إِلَى	ADP	P---------	AdpType=Prep	35	case	35:case	Vform=إِلَى|Gloss=to,towards|Root='_l_y|Translit=ʾilā|LTranslit=ʾilā
35	نشر	نَشر	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	32	nmod	32:nmod:إِلَى:gen	Vform=نَشرِ|Gloss=spreading,propagation|Root=n_^s_r|Translit=našri|LTranslit=našr
36	السلطة	سُلطَة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	35	nmod	35:nmod:gen	Vform=اَلسُّلطَةِ|Gloss=power,authority,rule|Root=s_l_.t|Translit=as-sulṭati|LTranslit=sulṭat
37	فوق	فَوقَ	ADP	PI------4-	AdpType=Prep|Case=Acc	38	case	38:case	Vform=فَوقَ|Gloss=above,over|Root=f_w_q|Translit=fawqa|LTranslit=fawqa
38	ها	هُوَ	PRON	SP---3FS2-	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	35	nmod	35:nmod:فَوقَ:gen	Vform=هَا|Gloss=he,she,it|Translit=hā|LTranslit=huwa
39	و	وَ	CCONJ	C---------	_	40	cc	40:cc	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
40	ربط	رَبط	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	35	conj	32:nmod:إِلَى:gen|35:conj	Vform=رَبطُ|Gloss=tying,connecting|Root=r_b_.t|Translit=rabṭu|LTranslit=rabṭ
41	ها	هُوَ	PRON	SP---3FS2-	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	40	nmod	40:nmod:gen	Vform=هَا|Gloss=he,she,it|Translit=hā|LTranslit=huwa
42	ب	بِ	ADP	P---------	AdpType=Prep	43	case	43:case	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
43	المركز	مَركَز	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	40	nmod	40:nmod:بِ:gen	Vform=اَلمَركَزِ|Gloss=center,station|Root=r_k_z|Translit=al-markazi|LTranslit=markaz
44	.	.	PUNCT	G---------	_	6	punct	6:punct	Vform=.|Translit=.
45	التطبيع	تَطبِيع	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	6	dep	6:dep	Vform=اَلتَّطبِيعُ|Gloss=normalization|Root=.t_b_`|Translit=at-taṭbīʿu|LTranslit=taṭbīʿ
46	ب	بِ	ADP	P---------	AdpType=Prep	47	case	47:case	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
47	أسرع	أَسرَع	ADJ	A-----MS2R	Case=Gen|Definite=Cons|Gender=Masc|Number=Sing	45	amod	45:amod	Vform=أَسرَعِ|Gloss=faster_/_fastest|Root=s_r_`|Translit=ʾasraʿi|LTranslit=ʾasraʿ
48	وقت	وَقت	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	47	nmod	47:nmod:gen	Vform=وَقتٍ|Gloss=time,moment,period_of_time|Root=w_q_t|Translit=waqtin|LTranslit=waqt
49	ممكن	مُمكِن	ADJ	A-----MS2I	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	48	amod	48:amod	Vform=مُمكِنٍ|Gloss=possible|Root=m_k_n|Translit=mumkinin|LTranslit=mumkin
50	مع	مَعَ	ADP	PI------4-	AdpType=Prep|Case=Acc	51	case	51:case	Vform=مَعَ|Gloss=with|Root=ma`|Translit=maʿa|LTranslit=maʿa
51	الحياة	حَيَاة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	45	nmod	45:nmod:مَعَ:gen	Vform=اَلحَيَاةِ|Gloss=life|Root=.h_y_y|Translit=al-ḥayāti|LTranslit=ḥayāt
52	العادية	عَادِيّ	ADJ	A-----FS2D	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	51	amod	51:amod	Vform=اَلعَادِيَّةِ|Gloss=ordinary,regular,normal|Root=`_w_d|Translit=al-ʿādīyati|LTranslit=ʿādīy
53	و	وَ	CCONJ	C---------	_	54	cc	54:cc	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
54	تفكيك	تَفكِيك	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	45	conj	6:dep|45:conj	Vform=تَفكِيكُ|Gloss=dismantling,dismemberment,fragmentation|Root=f_k_k|Translit=tafkīku|LTranslit=tafkīk
55	ظاهرات	ظاهرات	X	U---------	_	54	nmod	54:nmod	Vform=ظاهرات|Root=OOV|Translit=ẓāhrāt
56	السلاح	سِلَاح	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	55	nmod	55:nmod:gen	Vform=اَلسِّلَاحِ|Gloss=weapon|Root=s_l_.h|Translit=as-silāḥi|LTranslit=silāḥ
57	و	وَ	CCONJ	C---------	_	58	cc	58:cc	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
58	التعبئة	تَعبِئَة	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	56	conj	55:nmod:gen|56:conj	Vform=اَلتَّعبِئَةُ|Gloss=mobilization,alert|Root=`_b_'|Translit=at-taʿbiʾatu|LTranslit=taʿbiʾat
59	.	.	PUNCT	G---------	_	6	punct	6:punct	Vform=.|Translit=.
60	الانصراف	الانصراف	X	U---------	_	6	dep	6:dep	Vform=الانصراف|Root=OOV|Translit=ālānṣrāf
61	الى	إِلَى	ADP	P---------	AdpType=Prep	62	case	62:case	Vform=إِلَى|Gloss=to,towards|Root='_l_y|Translit=ʾilā|LTranslit=ʾilā
62	تحسين	تَحسِين	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	60	nmod	60:nmod:إِلَى:gen	Vform=تَحسِينِ|Gloss=improving,making_better|Root=.h_s_n|Translit=taḥsīni|LTranslit=taḥsīn
63	الاقتصاد	اِقتِصَاد	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	62	nmod	62:nmod:gen	Vform=اَلِاقتِصَادِ|Gloss=economy,saving|Root=q_.s_d|Translit=al-i-ʼqtiṣādi|LTranslit=iqtiṣād
64	و	وَ	CCONJ	C---------	_	65	cc	65:cc	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
65	التعليم	تَعلِيم	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	63	conj	62:nmod:gen|63:conj	Vform=اَلتَّعلِيمِ|Gloss=education,teaching,instructions,precepts|Root=`_l_m|Translit=at-taʿlīmi|LTranslit=taʿlīm
66	و	وَ	CCONJ	C---------	_	67	cc	67:cc	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
67	الطبابة	طِبَابَة	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	63	conj	62:nmod:gen|63:conj	Vform=اَلطِّبَابَةُ|Gloss=medical_profession,medical_treatment|Root=.t_b_b|Translit=aṭ-ṭibābatu|LTranslit=ṭibābat
68	و	وَ	CCONJ	C---------	_	69	cc	69:cc	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
69	المؤسسات	مُؤَسَّسَة	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	63	conj	62:nmod:gen|63:conj	Vform=اَلمُؤَسَّسَاتِ|Gloss=institution,organization,foundation|Root='_s_s|Translit=al-muʾassasāti|LTranslit=muʾassasat
70	على	عَلَى	ADP	P---------	AdpType=Prep	71	case	71:case	Vform=عَلَى|Gloss=on,above|Root=`_l_w|Translit=ʿalā|LTranslit=ʿalā
71	أنواع	نَوع	NOUN	N------P2R	Case=Gen|Definite=Cons|Number=Plur	69	nmod	69:nmod:عَلَى:gen	Vform=أَنوَاعِ|Gloss=type,kind,form|Root=n_w_`|Translit=ʾanwāʿi|LTranslit=nawʿ
72	ها	هُوَ	PRON	SP---3FS2-	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	71	nmod	71:nmod:gen	Vform=هَا|Gloss=he,she,it|Translit=hā|LTranslit=huwa
73	.	.	PUNCT	G---------	_	6	punct	6:punct	Vform=.|Translit=.

~~~



---
layout: base
title:  'Statistics of xcomp in UD_Arabic-PADT'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PADT: Relations: `xcomp`

This relation is universal.

184 nodes (0%) are attached to their parents as `xcomp`.

182 instances of `xcomp` (99%) are left-to-right (parent precedes child).
Average distance between parent and child is 6.34239130434783.

The following 6 pairs of parts of speech are connected with `xcomp`: <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt> (102; 55% instances), <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt> (76; 41% instances), <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-DET.html">DET</a></tt> (2; 1% instances), <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-X.html">X</a></tt> (2; 1% instances), <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-NUM.html">NUM</a></tt> (1; 1% instances), <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-PRON.html">PRON</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 xcomp	color:blue
1	روس	رُوس	X	X---------	Foreign=Yes	0	root	0:root	SpaceAfter=No|Vform=رُوس|Gloss=Ross|Root=rUs|Translit=rūs|LTranslit=rūs
2	:	:	PUNCT	G---------	_	1	punct	1:punct	Vform=:|Translit=:
3	قمة	قِمَّة	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	11	nsubj	11:nsubj	Vform=قِمَّةٌ|Gloss=summit|Root=q m m|Translit=qimmatun|LTranslit=qimmat
4	جديدة	جَدِيد	ADJ	A-----FS1I	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	3	amod	3:amod	Vform=جَدِيدَةٌ|Gloss=new,modern|Root=^g d d|Translit=ǧadīdatun|LTranslit=ǧadīd
5	ل	لِ	ADP	P---------	AdpType=Prep	6	case	6:case	Gloss=for,to|LTranslit=li|Root=l|Translit=li|Vform=لِ
6	السلام	سَلَام	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	3	nmod	3:nmod:لِ:gen	Gloss=peace|LTranslit=salām|Root=s l m|Translit=as-salāmi|Vform=اَلسَّلَامِ
7	في	فِي	ADP	P---------	AdpType=Prep	8	case	8:case	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
8	الشرق	شَرق	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	6	nmod	6:nmod:فِي:gen	Vform=اَلشَّرقِ|Gloss=east,East,Orient|Root=^s r q|Translit=aš-šarqi|LTranslit=šarq
9	الاوسط	أَوسَط	ADJ	A-----MS2D	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	8	amod	8:amod	Vform=اَلأَوسَطِ|Gloss=middle,central|Root=w s .t|Translit=al-ʾawsaṭi|LTranslit=ʾawsaṭ
10	ما	مَا	AUX	F---------	_	11	aux	11:aux	Vform=مَا|Gloss=not|Root=mA|Translit=mā|LTranslit=mā
11	زالت	زَال	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	1	parataxis	1:parataxis	Vform=زَالَت|Gloss=cease,stop_being,stop_doing|Root=z y l|Translit=zālat|LTranslit=zāl
12	ممكنة	مُمكِن	ADJ	A-----FS4I	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	11	xcomp	11:xcomp	Vform=مُمكِنَةً|Gloss=possible|Root=m k n|Translit=mumkinatan|LTranslit=mumkin

~~~


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 10 xcomp	color:blue
1	لعل	لعل	ADV	U---------	_	9	advmod	9:advmod	Vform=لعل|Root=OOV|Translit=lʿl
2	ما	مَا	DET	S---------	PronType=Int	9	nsubj:pass	9:nsubj:pass	Vform=مَا|Gloss=what,which|Root=mA|Translit=mā|LTranslit=mā
3	حدث	حَدَث	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	2	acl	2:acl	Vform=حَدَثَ|Gloss=happen,take_place|Root=.h d _t|Translit=ḥadaṯa|LTranslit=ḥadaṯ
4	يوم	يَوم	NOUN	N------S4R	Case=Acc|Definite=Cons|Number=Sing	3	obl	3:obl:acc	Vform=يَومَ|Gloss=day,today|Root=y w m|Translit=yawma|LTranslit=yawm
5	19	19	NUM	Q---------	NumForm=Digit	4	nummod	4:nummod	SpaceAfter=No|Vform=١٩|Translit=19
6	/	/	PUNCT	G---------	_	7	punct	7:punct	SpaceAfter=No|Vform=/|Translit=/
7	11	11	NUM	Q---------	NumForm=Digit	5	conj	4:nummod|5:conj	Vform=١١|Translit=11
8	الحالي	حَالِيّ	ADJ	A-----MS4D	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	5	amod	5:amod|7:amod	Vform=اَلحَالِيَّ|Gloss=present,current|Root=.h w l|Translit=al-ḥālīya|LTranslit=ḥālīy
9	يعد	عَدّ	VERB	VIIP-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	0	root	0:root	Vform=يُعَدُّ|Gloss=count,consider,deem|Root=` d d|Translit=yuʿaddu|LTranslit=ʿadd
10	صورة	صُورَة	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	9	xcomp	9:xcomp	Vform=صُورَةً|Gloss=picture,image,illustration,photo,photograph|Root=.s w r|Translit=ṣūratan|LTranslit=ṣūrat
11	واضحة	وَاضِح	ADJ	A-----FS4I	Case=Acc|Definite=Ind|Gender=Fem|Number=Sing	10	amod	10:amod	Vform=وَاضِحَةً|Gloss=clear,obvious,visible|Root=w .d .h|Translit=wāḍiḥatan|LTranslit=wāḍiḥ
12	ل	لِ	ADP	P---------	AdpType=Prep	13	case	13:case	Gloss=for,to|LTranslit=li|Root=l|Translit=li|Vform=لِ
13	كل	كُلّ	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	10	nmod	10:nmod:لِ:gen	Gloss=every,all,each,whole,entirety|LTranslit=kull|Root=k l l|Translit=kulli|Vform=كُلِّ
14	ذلك	ذٰلِكَ	DET	SD----MS2-	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	13	det	13:det	SpaceAfter=No|Vform=ذٰلِكَ|Gloss=that,those|Root=k|Translit=ḏālika|LTranslit=ḏālika
15	.	.	PUNCT	G---------	_	10	punct	10:punct	SpaceAfter=No|Vform=.|Translit=.
16	.	.	PUNCT	G---------	_	9	punct	9:punct	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 31	bgColor:blue
# visual-style 31	fgColor:white
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 16 31 xcomp	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	0:root	Gloss=and|LTranslit=wa|Root=wa|Translit=wa|Vform=وَ
2	يرى	رَأَى	VERB	VIIA-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	1	parataxis	1:parataxis	Gloss=see,think,believe|LTranslit=raʾā|Root=r ' y|Translit=yarā|Vform=يَرَى
3	مراقبون	مُرَاقِب	NOUN	N------P1I	Case=Nom|Definite=Ind|Number=Plur	2	nsubj	2:nsubj	Vform=مُرَاقِبُونَ|Gloss=observer,inspector|Root=r q b|Translit=murāqibūna|LTranslit=murāqib
4	في	فِي	ADP	P---------	AdpType=Prep	5	case	5:case	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
5	العاصمة	عَاصِمَة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	3	nmod	3:nmod:فِي:gen	Vform=اَلعَاصِمَةِ|Gloss=capital_city|Root=` .s m|Translit=al-ʿāṣimati|LTranslit=ʿāṣimat
6	العراقية	عِرَاقِيّ	ADJ	A-----FS2D	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	5	amod	5:amod	Vform=اَلعِرَاقِيَّةِ|Gloss=Iraqi|Root=` r q|Translit=al-ʿirāqīyati|LTranslit=ʿirāqīy
7	أن	أَنَّ	SCONJ	C---------	_	16	mark	16:mark	Vform=أَنَّ|Gloss=that|Root=' n|Translit=ʾanna|LTranslit=ʾanna
8	التنظيمات	تَنظِيم	NOUN	N------P4D	Case=Acc|Definite=Def|Number=Plur	16	nsubj	12:nsubj|16:nsubj	Vform=اَلتَّنظِيمَاتِ|Gloss=organization,network|Root=n .z m|Translit=at-tanẓīmāti|LTranslit=tanẓīm
9	السياسية	سِيَاسِيّ	ADJ	A-----FS4D	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	8	amod	8:amod	Vform=اَلسِّيَاسِيَّةَ|Gloss=political|Root=s w s|Translit=as-siyāsīyata|LTranslit=siyāsīy
10	الكردية	كُردِيّ	ADJ	A-----FS4D	Case=Acc|Definite=Def|Gender=Fem|Number=Sing	8	amod	8:amod	Vform=اَلكُردِيَّةَ|Gloss=Kurdish,Kurds|Root=k r d|Translit=al-kurdīyata|LTranslit=kurdīy
11	التي	اَلَّذِي	DET	SR----FS4-	Case=Acc|Gender=Fem|Number=Sing|PronType=Rel	12	nsubj	8:ref	Vform=اَلَّتِي|Gloss=that,which|Root=l|Translit=allatī|LTranslit=allaḏī
12	تغذي	غَذَّى	VERB	VIIA-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	8	acl:relcl	8:acl:relcl	Vform=تُغَذِّي|Gloss=feed,nourish|Root=.g _d w|Translit=tuġaḏḏī|LTranslit=ġaḏḏā
13	الدعوة	دَعوَة	NOUN	N------S4D	Case=Acc|Definite=Def|Number=Sing	12	obj	12:obj	Vform=اَلدَّعوَةَ|Gloss=call,invitation,supplication|Root=d ` w|Translit=ad-daʿwata|LTranslit=daʿwat
14	إلى	إِلَى	ADP	P---------	AdpType=Prep	15	case	15:case	Vform=إِلَى|Gloss=to,towards|Root=' l y|Translit=ʾilā|LTranslit=ʾilā
15	الفيدرالية	فِيدِرَالِيَّة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	13	nmod	13:nmod:إِلَى:gen	Vform=اَلفِيدِرَالِيَّةِ|Gloss=federation|Root=fIdirAl|Translit=al-fīdirālīyati|LTranslit=fīdirālīyat
16	تنظر	نَظَر	VERB	VIIA-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	2	ccomp	2:ccomp	Vform=تَنظُرُ|Gloss=look,observe,see,examine,look_into|Root=n .z r|Translit=tanẓuru|LTranslit=naẓar
17	ب	بِ	ADP	P---------	AdpType=Prep	18	case	18:case	Gloss=by,with|LTranslit=bi|Root=bi|Translit=bi|Vform=بِ
18	أهمية	أَهَمِّيَّة	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	16	obl	16:obl:بِ:gen	Gloss=importance,significance|LTranslit=ʾahammīyat|Root=h m m|Translit=ʾahammīyatin|Vform=أَهَمِّيَّةٍ
19	خاصة	خَاصّ	ADJ	A-----FS2I	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	18	amod	18:amod	Vform=خَاصَّةٍ|Gloss=special,specific|Root=_h .s .s|Translit=ḫāṣṣatin|LTranslit=ḫāṣṣ
20	إلى	إِلَى	ADP	P---------	AdpType=Prep	21	case	21:case	Vform=إِلَى|Gloss=to,towards|Root=' l y|Translit=ʾilā|LTranslit=ʾilā
21	مطالب	مَطلَب	NOUN	N------P2R	Case=Gen|Definite=Cons|Number=Plur	16	obl:arg	16:obl:arg:إِلَى:gen	Vform=مَطَالِبِ|Gloss=request,demand,claim,desideratum|Root=.t l b|Translit=maṭālibi|LTranslit=maṭlab
22	بعض	بَعض	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	21	nmod	21:nmod:gen	Vform=بَعضِ|Gloss=some,several|Root=b ` .d|Translit=baʿḍi|LTranslit=baʿḍ
23	التنظيمات	تَنظِيم	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	22	nmod	22:nmod:gen	Vform=اَلتَّنظِيمَاتِ|Gloss=organization,network|Root=n .z m|Translit=at-tanẓīmāti|LTranslit=tanẓīm
24	السياسية	سِيَاسِيّ	ADJ	A-----FS2D	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	23	amod	23:amod	Vform=اَلسِّيَاسِيَّةِ|Gloss=political|Root=s w s|Translit=as-siyāsīyati|LTranslit=siyāsīy
25	ب	بِ	ADP	P---------	AdpType=Prep|ExtPos=ADP	27	case	27:case	Gloss=by,with|LTranslit=bi|Root=bi|Translit=bi|Vform=بِ
26	شأن	شَأن	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	25	fixed	25:fixed	Gloss=matter,affair,concern,regard|LTranslit=šaʾn|Root=^s ' n|Translit=šaʾni|Vform=شَأنِ
27	الفيدرالية	فِيدِرَالِيَّة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	21	nmod	21:nmod:بِشَأنِ:gen	Vform=اَلفِيدِرَالِيَّةِ|Gloss=federation|Root=fIdirAl|Translit=al-fīdirālīyati|LTranslit=fīdirālīyat
28	لأن	لِأَنَّ	CCONJ	C---------	_	31	mark	31:mark	Vform=لِأَنَّ|Gloss=because|Root=' n|Translit=li-ʾanna|LTranslit=li-ʾanna
29	من	مِن	ADP	P---------	AdpType=Prep|ExtPos=ADP	31	case	31:case	Vform=مِن|Gloss=from|Root=min|Translit=min|LTranslit=min
30	شأن	شَأن	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	29	fixed	29:fixed	Vform=شَأنِ|Gloss=matter,affair,concern,regard|Root=^s ' n|Translit=šaʾni|LTranslit=šaʾn
31	ذلك	ذٰلِكَ	DET	SD----MS2-	Case=Gen|Gender=Masc|Number=Sing|PronType=Dem	16	xcomp	16:xcomp	Vform=ذٰلِكَ|Gloss=that,those|Root=k|Translit=ḏālika|LTranslit=ḏālika
32	أن	أَن	SCONJ	C---------	_	33	mark	33:mark	Vform=أَن|Gloss=to|Root=' n|Translit=ʾan|LTranslit=ʾan
33	يوفر	وَفَّر	VERB	VISA-3MS--	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	31	dep	31:dep	Vform=يُوَفِّرَ|Gloss=provide,fulfill|Root=w f r|Translit=yuwaffira|LTranslit=waffar
34	الغطاء	غِطَاء	NOUN	N------S4D	Case=Acc|Definite=Def|Number=Sing	33	obj	33:obj	Vform=اَلغِطَاءَ|Gloss=cover,blanket|Root=.g .t w|Translit=al-ġiṭāʾa|LTranslit=ġiṭāʾ
35	اللازم	لَازِم	ADJ	A-----MS4D	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	34	amod	34:amod	Vform=اَللَّازِمَ|Gloss=necessary,required,needed|Root=l z m|Translit=al-lāzima|LTranslit=lāzim
36	ل	لِ	ADP	P---------	AdpType=Prep	37	case	37:case	Gloss=for,to|LTranslit=li|Root=l|Translit=li|Vform=لِ
37	تبني	تَبَنِّي	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	35	nmod	35:nmod:لِ:gen	Gloss=adoption|LTranslit=tabannī|Root=b n w|Translit=tabannī|Vform=تَبَنِّي
38	الدعوة	دَعوَة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	37	nmod	37:nmod:gen	Vform=اَلدَّعوَةِ|Gloss=call,invitation,supplication|Root=d ` w|Translit=ad-daʿwati|LTranslit=daʿwat
39	إلى	إِلَى	ADP	P---------	AdpType=Prep	40	case	40:case	Vform=إِلَى|Gloss=to,towards|Root=' l y|Translit=ʾilā|LTranslit=ʾilā
40	الفيدرالية	فِيدِرَالِيَّة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	38	nmod	38:nmod:إِلَى:gen	Vform=اَلفِيدِرَالِيَّةِ|Gloss=federation|Root=fIdirAl|Translit=al-fīdirālīyati|LTranslit=fīdirālīyat
41	على	عَلَى	ADP	P---------	AdpType=Prep	42	case	42:case	Vform=عَلَى|Gloss=on,above|Root=` l w|Translit=ʿalā|LTranslit=ʿalā
42	نطاق	نِطَاق	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	37	nmod	37:nmod:عَلَى:gen	Vform=نِطَاقٍ|Gloss=scope,range,extent|Root=n .t q|Translit=niṭāqin|LTranslit=niṭāq
43	عام	عَامّ	ADJ	A-----MS2I	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	42	amod	42:amod	SpaceAfter=No|Vform=عَامٍّ|Gloss=general,common,public|Root=` m m|Translit=ʿāmmin|LTranslit=ʿāmm
44	.	.	PUNCT	G---------	_	1	punct	1:punct	Vform=.|Translit=.

~~~



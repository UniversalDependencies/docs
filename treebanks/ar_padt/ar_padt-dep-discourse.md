---
layout: base
title:  'Statistics of discourse in UD_Arabic-PADT'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PADT: Relations: `discourse`

This relation is universal.

22 nodes (0%) are attached to their parents as `discourse`.

22 instances of `discourse` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.90909090909091.

The following 6 pairs of parts of speech are connected with `discourse`: <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-PART.html">PART</a></tt> (11; 50% instances), <tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_padt-pos-PART.html">PART</a></tt> (6; 27% instances), <tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_padt-pos-PART.html">PART</a></tt> (2; 9% instances), <tt><a href="ar_padt-pos-ADV.html">ADV</a></tt>-<tt><a href="ar_padt-pos-PART.html">PART</a></tt> (1; 5% instances), <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-INTJ.html">INTJ</a></tt> (1; 5% instances), <tt><a href="ar_padt-pos-X.html">X</a></tt>-<tt><a href="ar_padt-pos-PART.html">PART</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 1 discourse	color:blue
1	هل	هَل	PART	F---------	_	2	discourse	2:discourse	Vform=هَل|Gloss=whether|Root=hal|Translit=hal|LTranslit=hal
2	تتعمق	تَعَمَّق	VERB	VIIA-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	0:root	Vform=تَتَعَمَّقُ|Gloss=delve_into,be_immersed,penetrate|Root=` m q|Translit=tataʿammaqu|LTranslit=taʿammaq
3	الأزمة	أَزمَة	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	2	nsubj	2:nsubj	Vform=اَلأَزمَةُ|Gloss=crisis|Root=' z m|Translit=al-ʾazmatu|LTranslit=ʾazmat
4	السياسية	سِيَاسِيّ	ADJ	A-----FS1D	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	3	amod	3:amod	Vform=اَلسِّيَاسِيَّةُ|Gloss=political|Root=s w s|Translit=as-siyāsīyatu|LTranslit=siyāsīy
5	و	وَ	CCONJ	C---------	_	6	cc	6:cc	Gloss=and|LTranslit=wa|Root=wa|Translit=wa|Vform=وَ
6	الاقتصادية	اِقتِصَادِيّ	ADJ	A-----FS1D	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	4	conj	3:amod|4:conj	Gloss=economic,economical|LTranslit=iqtiṣādīy|Root=q .s d|Translit=al-i-ʼqtiṣādīyatu|Vform=اَلِاقتِصَادِيَّةُ
7	في	فِي	ADP	P---------	AdpType=Prep	8	case	8:case	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
8	لبنان	لُبنَان	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	3	nmod	3:nmod:فِي:gen	SpaceAfter=No|Vform=لُبنَانَ|Gloss=Lebanon|Root=lubnAn|Translit=lubnāna|LTranslit=lubnān
9	؟	؟	PUNCT	G---------	_	2	punct	2:punct	Vform=؟|Translit=?

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 discourse	color:blue
1	أ	أَ	PART	F---------	_	4	discourse	4:discourse	Gloss=whether,indeed|LTranslit=ʾa|Root='a|Translit=ʾa|Vform=أَ
2	ليس	لَيس	AUX	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	4	cop	4:cop	Gloss=be_not,is_not|LTranslit=lays|Root=l y s|Translit=laysa|Vform=لَيسَ
3	هذا	هٰذَا	DET	SD----MS1-	Case=Nom|Gender=Masc|Number=Sing|PronType=Dem	4	nsubj	4:nsubj	Vform=هٰذَا|Gloss=this,these|Root=h|Translit=hāḏā|LTranslit=hāḏā
4	أفضل	أَفضَل	ADJ	A-----MS4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	0	root	0:root	Vform=أَفضَلَ|Gloss=better_/_best|Root=f .d l|Translit=ʾafḍala|LTranslit=ʾafḍal
5	من	مِن	ADP	P---------	AdpType=Prep	7	mark	7:mark	Vform=مِن|Gloss=from|Root=min|Translit=min|LTranslit=min
6	أن	أَن	SCONJ	C---------	_	7	mark	7:mark	Vform=أَن|Gloss=to|Root=' n|Translit=ʾan|LTranslit=ʾan
7	نزرع	زَرَع	VERB	VISA-1MP--	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	4	advcl	4:advcl:مِن:gen	Vform=نَزرَعَ|Gloss=plant,implant,cultivate|Root=z r `|Translit=nazraʿa|LTranslit=zaraʿ
8	القمح	قَمح	NOUN	N------S4D	Case=Acc|Definite=Def|Number=Sing	7	obj	7:obj	Vform=اَلقَمحَ|Gloss=wheat,grain|Root=q m .h|Translit=al-qamḥa|LTranslit=qamḥ
9	في	فِي	ADP	P---------	AdpType=Prep	10	case	10:case	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
10	رومانيا	رُومَانِيَا	X	X---------	Foreign=Yes	7	obl	7:obl:فِي:gen	SpaceAfter=No|Vform=رُومَانِيَا|Gloss=Romania|Root=rUmAn|Translit=rūmāniyā|LTranslit=rūmāniyā
11	؟	؟	PUNCT	G---------	_	4	punct	4:punct	SpaceAfter=No|Vform=؟|Translit=?
12	!	!	PUNCT	G---------	_	4	punct	4:punct	Vform=!|Translit=!

~~~


~~~ conllu
# visual-style 66	bgColor:blue
# visual-style 66	fgColor:white
# visual-style 72	bgColor:blue
# visual-style 72	fgColor:white
# visual-style 72 66 discourse	color:blue
1	في	فِي	ADP	P---------	AdpType=Prep	2	case	2:case	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
2	قضية	قَضِيَّة	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	4	obl	4:obl:فِي:gen	Vform=قَضِيَّةِ|Gloss=problem,issue|Root=q .d y|Translit=qaḍīyati|LTranslit=qaḍīyat
3	الحال	حَال	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	2	nmod	2:nmod:gen	Vform=اَلحَالِ|Gloss=situation,condition,case|Root=.h w l|Translit=al-ḥāli|LTranslit=ḥāl
4	اسمح	اسمح	X	U---------	_	0	root	0:root	Vform=اسمح|Root=OOV|Translit=āsmḥ
5	ل	لِ	ADP	P---------	AdpType=Prep	6	case	6:case	Gloss=for,to|LTranslit=li|Root=l|Translit=li|Vform=لِ
6	نفسي	نَفسِيّ	ADJ	A-----MS2I	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	4	obl:arg	4:obl:arg:لِ:gen	Gloss=mental,spiritual,psychological|LTranslit=nafsīy|Root=n f s|Translit=nafsīyin|Vform=نَفسِيٍّ
7	ب	بِ	ADP	P---------	AdpType=Prep	8	case	8:case	Gloss=by,with|LTranslit=bi|Root=bi|Translit=bi|Vform=بِ
8	استعارة	اِستِعَارَة	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	4	obl:arg	4:obl:arg:بِ:gen	Gloss=borrowing,lending|LTranslit=istiʿārat|Root=` w r|Translit=istiʿārati|Vform=اِستِعَارَةِ
9	القالب	قَالَب	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	8	nmod	8:nmod:gen	Vform=اَلقَالَبِ|Gloss=form,model,mold|Root=q l b|Translit=al-qālabi|LTranslit=qālab
10	الفقهي	فِقهِيّ	ADJ	A-----MS2D	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	9	amod	9:amod	Vform=اَلفِقهِيِّ|Gloss=juristic|Root=f q h|Translit=al-fiqhīyi|LTranslit=fiqhīy
11	ان	أَنَّ	SCONJ	C---------	_	13	mark	13:mark	Vform=أَنَّ|Gloss=that|Root=' n|Translit=ʾanna|LTranslit=ʾanna
12	الحق	حَقّ	NOUN	N------S4D	Case=Acc|Definite=Def|Number=Sing	13	nsubj	13:nsubj	Vform=اَلحَقَّ|Gloss=truth,right,law|Root=.h q q|Translit=al-ḥaqqa|LTranslit=ḥaqq
13	بين	بَيِّن	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	8	nmod	8:nmod:أَنَّ	Vform=بَيِّنٌ|Gloss=clear,evident,explicit|Root=b y n|Translit=bayyinun|LTranslit=bayyin
14	و	وَ	CCONJ	C---------	_	16	cc	16:cc	Gloss=and|LTranslit=wa|Root=wa|Translit=wa|Vform=وَ
15	الباطل	بَاطِل	ADJ	A-----MS4D	Case=Acc|Definite=Def|Gender=Masc|Number=Sing	16	nsubj	16:nsubj	Gloss=void,false|LTranslit=bāṭil|Root=b .t l|Translit=al-bāṭila|Vform=اَلبَاطِلَ
16	بين	بَيِّن	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	13	conj	8:nmod:أَنَّ|13:conj	Vform=بَيِّنٌ|Gloss=clear,evident,explicit|Root=b y n|Translit=bayyinun|LTranslit=bayyin
17	و	وَ	CCONJ	C---------	_	25	cc	25:cc	Gloss=and|LTranslit=wa|Root=wa|Translit=wa|Vform=وَ
18	أن	أَنَّ	SCONJ	C---------	_	25	mark	25:mark	Gloss=that|LTranslit=ʾanna|Root=' n|Translit=ʾanna|Vform=أَنَّ
19	موقف	مَوقِف	NOUN	N------S4R	Case=Acc|Definite=Cons|Number=Sing	25	nsubj	25:nsubj	Vform=مَوقِفَ|Gloss=position|Root=w q f|Translit=mawqifa|LTranslit=mawqif
20	اعضاء	عُضو	NOUN	N------P2R	Case=Gen|Definite=Cons|Number=Plur	19	nmod	19:nmod:gen	Vform=أَعضَاءِ|Gloss=member|Root=` .d w|Translit=ʾaʿḍāʾi|LTranslit=ʿuḍw
21	جمعية	جَمعِيَّة	NOUN	N------S2R	Case=Gen|Definite=Cons|Number=Sing	20	nmod	20:nmod:gen	Vform=جَمعِيَّةِ|Gloss=association,society|Root=^g m `|Translit=ǧamʿīyati|LTranslit=ǧamʿīyat
22	الجغرافيين	جُغرَافِيّ	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	21	nmod	21:nmod:gen	Vform=اَلجُغرَافِيِّينَ|Gloss=geographer|Root=^gu.grAf|Translit=al-ǧuġrāfīyīna|LTranslit=ǧuġrāfīy
23	التونسيين	تُونِسِيّ	ADJ	A-----MP2D	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	22	amod	22:amod	Vform=اَلتُّونِسِيِّينَ|Gloss=Tunisian|Root=t w n s|Translit=at-tūnisīyīna|LTranslit=tūnisīy
24	هو	هُوَ	PRON	SP---3MS1-	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	25	cop	25:cop	Vform=هُوَ|Gloss=he,she,it|Translit=huwa|LTranslit=huwa
25	الموقف	مَوقِف	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	13	conj	8:nmod:أَنَّ|13:conj	Vform=اَلمَوقِفُ|Gloss=position|Root=w q f|Translit=al-mawqifu|LTranslit=mawqif
26	المشرف	مُشَرِّف	ADJ	A-----MS1D	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	25	amod	25:amod	Vform=اَلمُشَرِّفُ|Gloss=honorable,honorary|Root=^s r f|Translit=al-mušarrifu|LTranslit=mušarrif
27	المطلوب	مَطلُوب	ADJ	A-----MS1D	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	25	amod	25:amod	Vform=اَلمَطلُوبُ|Gloss=required,necessary,demanded|Root=.t l b|Translit=al-maṭlūbu|LTranslit=maṭlūb
28	في	فِي	ADP	P---------	AdpType=Prep	30	case	30:case	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
29	هذه	هٰذَا	DET	SD----FS2-	Case=Gen|Gender=Fem|Number=Sing|PronType=Dem	30	det	30:det	Vform=هٰذِهِ|Gloss=this,these|Root=h|Translit=hāḏihi|LTranslit=hāḏā
30	اللحظة	لَحظَة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	27	obl	27:obl:فِي:gen	Vform=اَللَّحظَةِ|Gloss=moment,instant|Root=l .h .z|Translit=al-laḥẓati|LTranslit=laḥẓat
31	التي	اَلَّذِي	DET	SR----FS2-	Case=Gen|Gender=Fem|Number=Sing|PronType=Rel	30	det	30:det	Vform=اَلَّتِي|Gloss=that,which|Root=l|Translit=allatī|LTranslit=allaḏī
32	اختلطت	اِختَلَط	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	30	acl	30:acl	Vform=اِختَلَطَت|Gloss=mix,associate|Root=_h l .t|Translit=iḫtalaṭat|LTranslit=iḫtalaṭ
33	في	فِي	ADP	P---------	AdpType=Prep	34	case	34:case	Gloss=in|LTranslit=fī|Root=fI|Translit=fī|Vform=فِي
34	ها	هُوَ	PRON	SP---3FS2-	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	32	obl	32:obl:فِي:gen	Gloss=he,she,it|LTranslit=huwa|Translit=hā|Vform=هَا
35	المقاييس	مِقيَاس	NOUN	N------P1D	Case=Nom|Definite=Def|Number=Plur	32	nsubj	32:nsubj	Vform=اَلمَقَايِيسُ|Gloss=standard,measure,measurement|Root=q y s|Translit=al-maqāyīsu|LTranslit=miqyās
36	و	وَ	CCONJ	C---------	_	37	cc	37:cc	Gloss=and|LTranslit=wa|Root=wa|Translit=wa|Vform=وَ
37	تضاءلت	تَضَاءَل	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	32	conj	30:acl|32:conj	Gloss=dwindle,decline,decrease|LTranslit=taḍāʾal|Root=.d ' l|Translit=taḍāʾalat|Vform=تَضَاءَلَت
38	حظوظ	حَظّ	NOUN	N------P1R	Case=Nom|Definite=Cons|Number=Plur	37	nsubj	37:nsubj	Vform=حُظُوظُ|Gloss=luck,fortune,shares|Root=.h .z .z|Translit=ḥuẓūẓu|LTranslit=ḥaẓẓ
39	المواقف	مَوقِف	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	38	nmod	38:nmod:gen	Vform=اَلمَوَاقِفِ|Gloss=position|Root=w q f|Translit=al-mawāqifi|LTranslit=mawqif
40	الرمزية	رَمزِيّ	ADJ	A-----FS2D	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	39	amod	39:amod	Vform=اَلرَّمزِيَّةِ|Gloss=encoded,encrypted,in_cipher|Root=r m z|Translit=ar-ramzīyati|LTranslit=ramzīy
41	المعبرة	مُعَبِّر	ADJ	A-----FS2D	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	39	amod	39:amod	SpaceAfter=No|Vform=اَلمُعَبِّرَةِ|Gloss=expressing|Root=` b r|Translit=al-muʿabbirati|LTranslit=muʿabbir
42	،	،	PUNCT	G---------	_	41	punct	41:punct	Vform=،|Translit=,
43	ف	فَ	CCONJ	C---------	_	46	cc	46:cc	Gloss=and,so|LTranslit=fa|Root=fa|Translit=fa|Vform=فَ
44	المسألة	مَسأَلَة	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	46	nsubj	46:nsubj	Gloss=issue,affair,matter,question|LTranslit=masʾalat|Root=s ' l|Translit=al-masʾalatu|Vform=اَلمَسأَلَةُ
45	لا	لَا	PART	F---------	_	46	advmod	46:advmod	Vform=لَا|Gloss=no,not|Root=lA|Translit=lā|LTranslit=lā
46	تتعلق	تَعَلَّق	VERB	VIIA-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	4	conj	0:root|4:conj	Vform=تَتَعَلَّقُ|Gloss=be_connected_with,pertain_to|Root=` l q|Translit=tataʿallaqu|LTranslit=taʿallaq
47	ب	بِ	ADP	P---------	AdpType=Prep	48	case	48:case	Gloss=by,with|LTranslit=bi|Root=bi|Translit=bi|Vform=بِ
48	رياضيين	رِيَاضِيّ	NOUN	N------P2I	Case=Gen|Definite=Ind|Number=Plur	46	obl:arg	46:obl:arg:بِ:gen	Gloss=mathematician|LTranslit=riyāḍīy|Root=r w .d|Translit=riyāḍīyīna|Vform=رِيَاضِيِّينَ
49	او	أَو	CCONJ	C---------	_	50	cc	50:cc	Vform=أَو|Gloss=or|Root='aw|Translit=ʾaw|LTranslit=ʾaw
50	فنانين	فَنَّان	NOUN	N------P2I	Case=Gen|Definite=Ind|Number=Plur	48	conj	46:obl:arg:بِ:gen|48:conj	Vform=فَنَّانِينَ|Gloss=artist|Root=f n n|Translit=fannānīna|LTranslit=fannān
51	او	أَو	CCONJ	C---------	_	52	cc	52:cc	Vform=أَو|Gloss=or|Root='aw|Translit=ʾaw|LTranslit=ʾaw
52	شعراء	شَاعِر	NOUN	N------P2I	Case=Gen|Definite=Ind|Number=Plur	48	conj	46:obl:arg:بِ:gen|48:conj	Vform=شُعَرَاءَ|Gloss=poet|Root=^s ` r|Translit=šuʿarāʾa|LTranslit=šāʿir
53	اسرائيليين	إِسرَائِيلِيّ	ADJ	A-----MP2I	Case=Gen|Definite=Ind|Gender=Masc|Number=Plur	52	amod	52:amod	Vform=إِسرَائِيلِيِّينَ|Gloss=Israeli|Root='isrA'Il|Translit=ʾisrāʾīlīyīna|LTranslit=ʾisrāʾīlīy
54	بل	بَل	CCONJ	C---------	_	48	cc	48:cc	Vform=بَل|Gloss=but_rather,in_fact|Root=bal|Translit=bal|LTranslit=bal
55	اساسا	أُسّ	NOUN	N------P4I	Case=Acc|Definite=Ind|Number=Plur	57	nmod	57:nmod:acc	Vform=إِسَاسًا|Gloss=exponent,basis|Root=' s s|Translit=ʾisāsan|LTranslit=ʾuss
56	ب	بِ	ADP	P---------	AdpType=Prep	57	case	57:case	Gloss=by,with|LTranslit=bi|Root=bi|Translit=bi|Vform=بِ
57	جغرافيين	جُغرَافِيّ	NOUN	N------P2I	Case=Gen|Definite=Ind|Number=Plur	48	nmod	48:nmod:بِ:gen|50:nmod:بِ:gen|52:nmod:بِ:gen	Gloss=geographer|LTranslit=ǧuġrāfīy|Root=^gu.grAf|Translit=ǧuġrāfīyīna|Vform=جُغرَافِيِّينَ
58	اسرائيليين	إِسرَائِيلِيّ	ADJ	A-----MP2I	Case=Gen|Definite=Ind|Gender=Masc|Number=Plur	57	amod	57:amod	Vform=إِسرَائِيلِيِّينَ|Gloss=Israeli|Root='isrA'Il|Translit=ʾisrāʾīlīyīna|LTranslit=ʾisrāʾīlīy
59	اي	أَي	CCONJ	C---------	_	61	cc	61:cc	Vform=أَي|Gloss=i.e.,in_other_words|Root='ay|Translit=ʾay|LTranslit=ʾay
60	ب	بِ	ADP	P---------	AdpType=Prep	61	case	61:case	Gloss=by,with|LTranslit=bi|Root=bi|Translit=bi|Vform=بِ
61	أخصائيي	أَخِصَّائِيّ	NOUN	N------P2R	Case=Gen|Definite=Cons|Number=Plur	57	appos	57:appos	Gloss=specialist,expert|LTranslit=ʾaḫiṣṣāʾīy|Root=_h .s .s|Translit=ʾaḫiṣṣāʾīyī|Vform=أَخِصَّائِيِّي
62	ارض	أَرض	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	61	nmod	61:nmod:gen	Vform=أَرضٍ|Gloss=earth,territory,land|Root=' r .d|Translit=ʾarḍin|LTranslit=ʾarḍ
63	و	وَ	CCONJ	C---------	_	64	cc	64:cc	Gloss=and|LTranslit=wa|Root=wa|Translit=wa|Vform=وَ
64	خرائط	خَرِيطَة	NOUN	N------P2I	Case=Gen|Definite=Ind|Number=Plur	62	conj	61:nmod:gen|62:conj	Gloss=map,chart|LTranslit=ḫarīṭat|Root=_h r .t|Translit=ḫarāʾiṭa|Vform=خَرَائِطَ
65	و	وَ	CCONJ	C---------	_	72	cc	72:cc	Gloss=and|LTranslit=wa|Root=wa|Translit=wa|Vform=وَ
66	هل	هَل	PART	F---------	_	72	discourse	72:discourse	Gloss=whether|LTranslit=hal|Root=hal|Translit=hal|Vform=هَل
67	معركة	مَعرَكَة	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	72	nsubj	72:nsubj	Gloss=battle,campaign|LTranslit=maʿrakat|Root=` r k|Translit=maʿrakatu|Vform=مَعرَكَةُ
68	نا	هُوَ	PRON	SP---1MP2-	Case=Gen|Gender=Masc|Number=Plur|Person=1|PronType=Prs	67	nmod	67:nmod:gen	Gloss=he,she,it|LTranslit=huwa|Translit=nā|Vform=نَا
69	مع	مَعَ	ADP	PI------4-	AdpType=Prep|Case=Acc	70	case	70:case	Vform=مَعَ|Gloss=with|Root=ma`|Translit=maʿa|LTranslit=maʿa
70	اسرائيل	إِسرَائِيل	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	67	nmod	67:nmod:مَعَ:gen	Vform=إِسرَائِيلَ|Gloss=Israel|Root='isrA'Il|Translit=ʾisrāʾīla|LTranslit=ʾisrāʾīl
71	الا	الا	ADV	U---------	_	72	advmod:emph	72:advmod:emph	Vform=الا|Root=OOV|Translit=ālā
72	معركة	مَعرَكَة	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	4	conj	0:root|4:conj	Vform=مَعرَكَةُ|Gloss=battle,campaign|Root=` r k|Translit=maʿrakatu|LTranslit=maʿrakat
73	ارض	أَرض	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	72	nmod	72:nmod:gen	Vform=أَرضٍ|Gloss=earth,territory,land|Root=' r .d|Translit=ʾarḍin|LTranslit=ʾarḍ
74	و	وَ	CCONJ	C---------	_	75	cc	75:cc	Gloss=and|LTranslit=wa|Root=wa|Translit=wa|Vform=وَ
75	خرائط	خَرِيطَة	NOUN	N------P2I	Case=Gen|Definite=Ind|Number=Plur	73	conj	72:nmod:gen|73:conj	Gloss=map,chart|LTranslit=ḫarīṭat|Root=_h r .t|Translit=ḫarāʾiṭa|Vform=خَرَائِطَ
76	؟	؟	PUNCT	G---------	_	4	punct	4:punct	SpaceAfter=No|Vform=؟|Translit=?
77	!	!	PUNCT	G---------	_	4	punct	4:punct	Vform=!|Translit=!

~~~



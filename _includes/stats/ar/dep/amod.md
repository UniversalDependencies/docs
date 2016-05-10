

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

24373 nodes (9%) are attached to their parents as `amod`.

24326 instances of `amod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.36725064620687.

The following 15 pairs of parts of speech are connected with `amod`: [ar-pos/NOUN]()-[ar-pos/ADJ]() (22810; 94% instances), [ar-pos/X]()-[ar-pos/ADJ]() (829; 3% instances), [ar-pos/NUM]()-[ar-pos/ADJ]() (335; 1% instances), [ar-pos/ADJ]()-[ar-pos/ADJ]() (287; 1% instances), [ar-pos/PRON]()-[ar-pos/ADJ]() (38; 0% instances), [ar-pos/NOUN]()-[ar-pos/PRON]() (33; 0% instances), [ar-pos/VERB]()-[ar-pos/ADJ]() (19; 0% instances), [ar-pos/DET]()-[ar-pos/ADJ]() (9; 0% instances), [ar-pos/PART]()-[ar-pos/ADJ]() (4; 0% instances), [ar-pos/ADJ]()-[ar-pos/PRON]() (3; 0% instances), [ar-pos/PUNCT]()-[ar-pos/ADJ]() (2; 0% instances), [ar-pos/ADP]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/NOUN]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/DET]() (1; 0% instances), [ar-pos/PROPN]()-[ar-pos/ADJ]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 amod	color:blue
1	مجموعة	مَجمُوعَة	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	7	nsubj	_	Vform=مَجمُوعَةٌ|Gloss=collection,group,bloc|Root=^g_m_`|Translit=maǧmūʿatun|LTranslit=maǧmūʿat
2	من	مِن	ADP	P---------	AdpType=Prep	3	case	_	Vform=مِن|Gloss=from|Root=min|Translit=min|LTranslit=min
3	الاميركيين	أَمِيرِكِيّ	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	1	nmod	_	Vform=اَلأَمِيرِكِيِّينَ|Gloss=American|Root='amIrik|Translit=al-ʾamīrikīyīna|LTranslit=ʾamīrikīy
4	المعارضين	مُعَارِض	ADJ	A-----MP2D	Case=Gen|Definite=Def|Gender=Masc|Number=Plur	3	amod	_	Vform=اَلمُعَارِضِينَ|Gloss=opposing,resisting|Root=`_r_.d|Translit=al-muʿāriḍīna|LTranslit=muʿāriḍ
5	ل	لِ	ADP	P---------	AdpType=Prep	6	case	_	Vform=لِ|Gloss=for,to|Root=l|Translit=li|LTranslit=li
6	الحظر	حَظر	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	4	nmod	_	Vform=اَلحَظرِ|Gloss=prohibition,ban|Root=.h_.z_r|Translit=al-ḥaẓri|LTranslit=ḥaẓr
7	تزور	زَار	VERB	VIIA-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	_	Vform=تَزُورُ|Gloss=visit|Root=z_w_r|Translit=tazūru|LTranslit=zār
8	البصرة	بَصرَة	NOUN	N------S4D	Case=Acc|Definite=Def|Number=Sing	7	dobj	_	Vform=اَلبَصرَةَ|Gloss=Basra|Root=b_.s_r|Translit=al-baṣrata|LTranslit=baṣrat

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	البعد	البعد	X	U---------	_	0	root	_	Vform=البعد|Translit=AlbEd
2	الآخر	آخَر	ADJ	A-----MS1D	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	amod	_	Vform=اَلآخَرُ|Gloss=other,another|Root='__h_r|Translit=al-ʾāḫaru|LTranslit=ʾāḫar

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 7 amod	color:blue
1	40	40	NUM	Q---------	NumForm=Digit	0	root	_	Vform=٤٠|Translit=40
2	ألف	أَلف	NUM	QM-----S4R	Case=Acc|Definite=Red|Number=Sing|NumForm=Word	1	nummod	_	Vform=أَلفَ|Gloss=thousand|Root='_l_f|Translit=ʾalfa|LTranslit=ʾalf
3	حالة	حَالَة	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	2	nmod	_	Vform=حَالَةِ|Gloss=condition,case,situation|Root=.h_w_l|Translit=ḥālati|LTranslit=ḥālat
4	اختفاء	اِختِفَاء	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	3	nmod	_	Vform=اِختِفَاءٍ|Gloss=disappearance|Root=_h_f_y|Translit=iḫtifāʾin|LTranslit=iḫtifāʾ
5	ب	بِ	ADP	P---------	AdpType=Prep	6	case	_	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
6	مصر	مِصر	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	3	nmod	_	Vform=مِصرَ|Gloss=Egypt|Root=m_.s_r|Translit=miṣra|LTranslit=miṣr
7	أشهر	أَشهَر	ADJ	A-----MS1R	Case=Nom|Definite=Red|Gender=Masc|Number=Sing	1	amod	_	Vform=أَشهَرُ|Gloss=more_/_most_famous,more_/_most_well_-_known|Root=^s_h_r|Translit=ʾašharu|LTranslit=ʾašhar
8	ها	هُوَ	PRON	SP---3FS2-	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	7	nmod	_	Vform=هَا|Gloss=he,she,it|Translit=hā|LTranslit=huwa
9	الصحافي	صَحَافِيّ	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	7	nsubj	_	Vform=اَلصَّحَافِيُّ|Gloss=journalist,reporter|Root=.s_.h_f|Translit=aṣ-ṣaḥāfīyu|LTranslit=ṣaḥāfīy
10	رضا	رضا	X	U---------	_	11	nmod	_	Vform=رضا|Translit=rDA
11	هلال	هلال	X	U---------	_	9	nmod	_	Vform=هلال|Translit=hlAl

~~~



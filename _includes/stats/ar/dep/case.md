

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

40908 nodes (14%) are attached to their parents as `case`.

40568 instances of `case` (99%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.1417082233304.

The following 34 pairs of parts of speech are connected with `case`: [ar-pos/NOUN]()-[ar-pos/ADP]() (31998; 78% instances), [ar-pos/PRON]()-[ar-pos/ADP]() (2673; 7% instances), [ar-pos/X]()-[ar-pos/ADP]() (2146; 5% instances), [ar-pos/NUM]()-[ar-pos/ADP]() (1801; 4% instances), [ar-pos/ADJ]()-[ar-pos/ADP]() (1290; 3% instances), [ar-pos/X]()-[ar-pos/X]() (581; 1% instances), [ar-pos/DET]()-[ar-pos/ADP]() (147; 0% instances), [ar-pos/NOUN]()-[ar-pos/NOUN]() (73; 0% instances), [ar-pos/ADV]()-[ar-pos/ADP]() (65; 0% instances), [ar-pos/CONJ]()-[ar-pos/ADP]() (16; 0% instances), [ar-pos/PART]()-[ar-pos/ADP]() (15; 0% instances), [ar-pos/ADP]()-[ar-pos/ADP]() (14; 0% instances), [ar-pos/NOUN]()-[ar-pos/CONJ]() (14; 0% instances), [ar-pos/NOUN]()-[ar-pos/X]() (12; 0% instances), [ar-pos/X]()-[ar-pos/NOUN]() (10; 0% instances), [ar-pos/PROPN]()-[ar-pos/ADP]() (8; 0% instances), [ar-pos/ADJ]()-[ar-pos/CONJ]() (7; 0% instances), [ar-pos/NUM]()-[ar-pos/NOUN]() (7; 0% instances), [ar-pos/ADJ]()-[ar-pos/NOUN]() (5; 0% instances), [ar-pos/NOUN]()-[ar-pos/VERB]() (4; 0% instances), [ar-pos/PRON]()-[ar-pos/NOUN]() (3; 0% instances), [ar-pos/DET]()-[ar-pos/NOUN]() (2; 0% instances), [ar-pos/NOUN]()-[ar-pos/NUM]() (2; 0% instances), [ar-pos/NOUN]()-[ar-pos/PRON]() (2; 0% instances), [ar-pos/NUM]()-[ar-pos/X]() (2; 0% instances), [ar-pos/PRON]()-[ar-pos/PART]() (2; 0% instances), [ar-pos/X]()-[ar-pos/CONJ]() (2; 0% instances), [ar-pos/ADJ]()-[ar-pos/PART]() (1; 0% instances), [ar-pos/ADJ]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/PART]() (1; 0% instances), [ar-pos/PART]()-[ar-pos/X]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/CONJ]() (1; 0% instances), [ar-pos/X]()-[ar-pos/PART]() (1; 0% instances), [ar-pos/X]()-[ar-pos/VERB]() (1; 0% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 case	color:blue
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
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	و	وَ	CONJ	C---------	_	0	root	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	علق	عَلَّق	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	1	parataxis	_	Vform=عَلَّقَ|Gloss=comment|Root=`_l_q|Translit=ʿallaqa|LTranslit=ʿallaq
3	علي	عَلَى	ADP	P---------	AdpType=Prep	4	case	_	Vform=عَلَي|Gloss=on,above|Root=`_l_w|Translit=ʿalay|LTranslit=ʿalā
4	ه	هُوَ	PRON	SP---3MS2-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	2	dobj	_	Vform=هِ|Gloss=he,she,it|Translit=hi|LTranslit=huwa
5	ب	بِ	ADP	P---------	AdpType=Prep	6	case	_	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
6	قول	قَول	NOUN	N------S2R	Case=Gen|Definite=Red|Number=Sing	2	nmod	_	Vform=قَولِ|Gloss=statement,remark,reports|Root=q_w_l|Translit=qawli|LTranslit=qawl
7	ه	هُوَ	PRON	SP---3MS2-	Case=Gen|Gender=Masc|Number=Sing|Person=3|PronType=Prs	6	nmod	_	Vform=هِ|Gloss=he,she,it|Translit=hi|LTranslit=huwa
8	"	"	PUNCT	G---------	_	10	punct	_	SpaceAfter=No|Vform="|Translit="
9	كان	كَان	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	10	cop	_	Vform=كَانَ|Gloss=be,is,exist|Root=k_w_n|Translit=kāna|LTranslit=kān
10	خطابا	خِطَاب	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	6	ccomp	_	Vform=خِطَابًا|Gloss=speech|Root=_h_.t_b|Translit=ḫiṭāban|LTranslit=ḫiṭāb
11	عظيما	عَظِيم	ADJ	A-----MS4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	10	amod	_	SpaceAfter=No|Vform=عَظِيمًا|Gloss=great,powerful|Root=`_.z_m|Translit=ʿaẓīman|LTranslit=ʿaẓīm
12	"	"	PUNCT	G---------	_	10	punct	_	SpaceAfter=No|Vform="|Translit="
13	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 case	color:blue
1	اللقاء	لِقَاء	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	0	root	_	Vform=اَللِّقَاءُ|Gloss=meeting,encounter,interview|Root=l_q_y|Translit=al-liqāʾu|LTranslit=liqāʾ
2	الاول	أَوَّل	ADJ	A-----MS1D	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	amod	_	Vform=اَلأَوَّلُ|Gloss=first,foremost,early|Root='_w_l|Translit=al-ʾawwalu|LTranslit=ʾawwal
3	بين	بَينَ	ADP	PI------4-	AdpType=Prep|Case=Acc	4	case	_	Vform=بَينَ|Gloss=between,among|Root=b_y_n|Translit=bayna|LTranslit=bayna
4	كاسترو	كَاسترُو	X	X---------	Foreign=Foreign	1	nmod	_	Vform=كَاسترُو|Gloss=Castro|Root=kAstrU|Translit=kāstrū|LTranslit=kāstrū
5	و	وَ	CONJ	C---------	_	4	cc	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
6	الطفل	طِفل	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	4	conj	_	Vform=اَلطِّفلِ|Gloss=child,infant,boy|Root=.t_f_l|Translit=aṭ-ṭifli|LTranslit=ṭifl
7	اليان	إِلِيَان	X	X---------	Foreign=Foreign	6	nmod	_	Vform=إِلِيَان|Gloss=Elian|Root='iliyAn|Translit=ʾiliyān|LTranslit=ʾiliyān

~~~



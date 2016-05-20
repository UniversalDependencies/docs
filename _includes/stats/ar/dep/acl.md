

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

5295 nodes (2%) are attached to their parents as `acl`.

5280 instances of `acl` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.41133144475921.

The following 26 pairs of parts of speech are connected with `acl`: [ar-pos/NOUN]()-[ar-pos/VERB]() (4014; 76% instances), [ar-pos/PRON]()-[ar-pos/VERB]() (473; 9% instances), [ar-pos/X]()-[ar-pos/VERB]() (278; 5% instances), [ar-pos/DET]()-[ar-pos/VERB]() (191; 4% instances), [ar-pos/NUM]()-[ar-pos/VERB]() (99; 2% instances), [ar-pos/ADJ]()-[ar-pos/VERB]() (91; 2% instances), [ar-pos/NOUN]()-[ar-pos/ADJ]() (46; 1% instances), [ar-pos/VERB]()-[ar-pos/VERB]() (29; 1% instances), [ar-pos/NOUN]()-[ar-pos/NOUN]() (28; 1% instances), [ar-pos/X]()-[ar-pos/NOUN]() (9; 0% instances), [ar-pos/CONJ]()-[ar-pos/VERB]() (6; 0% instances), [ar-pos/NOUN]()-[ar-pos/X]() (5; 0% instances), [ar-pos/X]()-[ar-pos/ADJ]() (5; 0% instances), [ar-pos/PRON]()-[ar-pos/NOUN]() (4; 0% instances), [ar-pos/ADJ]()-[ar-pos/ADJ]() (3; 0% instances), [ar-pos/PROPN]()-[ar-pos/VERB]() (3; 0% instances), [ar-pos/PRON]()-[ar-pos/ADJ]() (2; 0% instances), [ar-pos/DET]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/INTJ]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/NOUN]()-[ar-pos/NUM]() (1; 0% instances), [ar-pos/NUM]()-[ar-pos/NUM]() (1; 0% instances), [ar-pos/NUM]()-[ar-pos/PRON]() (1; 0% instances), [ar-pos/PART]()-[ar-pos/VERB]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/X]() (1; 0% instances), [ar-pos/VERB]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/X]()-[ar-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 acl	color:blue
1	بداية	بِدَايَة	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	3	nmod	_	SpaceAfter=No|Vform=بِدَايَةٌ|Gloss=beginning,start|Root=b_d_'|Translit=bidāyatun|LTranslit=bidāyat
2	،	،	PUNCT	G---------	_	3	punct	_	Vform=،|Translit=،
3	كلمة	كَلِمَة	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	0	root	_	Vform=كَلِمَةٌ|Gloss=word,remark,speech|Root=k_l_m|Translit=kalimatun|LTranslit=kalimat
4	ابو	ابو	X	U---------	_	3	nmod	_	Vform=ابو|Translit=Abw
5	كسم	كسم	X	U---------	_	4	nmod	_	Vform=كسم|Translit=ksm
6	جاء	جَاء	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	3	acl	_	Vform=جَاءَ|Gloss=arrive,come,occur|Root=^g_y_'|Translit=ǧāʾa|LTranslit=ǧāʾ
7	في	فِي	ADP	P---------	AdpType=Prep	8	case	_	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
8	ها	هُوَ	PRON	SP---3FS2-	Case=Gen|Gender=Fem|Number=Sing|Person=3|PronType=Prs	6	dobj	_	Vform=هَا|Gloss=he,she,it|Translit=hā|LTranslit=huwa
9	:	:	PUNCT	G---------	_	3	punct	_	Vform=:|Translit=:

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 acl	color:blue
1	و	وَ	CONJ	C---------	_	0	root	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	نريد	أَرَاد	VERB	VIIA-1MP--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Plur|Person=1|VerbForm=Fin|Voice=Act	1	parataxis	_	Vform=نُرِيدُ|Gloss=want,desire,intend|Root=r_w_d|Translit=nurīdu|LTranslit=ʾarād
3	من	مَن	PRON	S---------	_	2	dobj	_	Vform=مَن|Gloss=who|Root=man|Translit=man|LTranslit=man
4	يحسب	حَسَب	VERB	VIIA-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	3	acl	_	Vform=يَحسُبُ|Gloss=compute,charge|Root=.h_s_b|Translit=yaḥsubu|LTranslit=ḥasab
5	ل	لِ	ADP	P---------	AdpType=Prep	6	case	_	Vform=لَ|Gloss=for,to|Root=l|Translit=la|LTranslit=li
6	نا	هُوَ	PRON	SP---1MP2-	Case=Gen|Gender=Masc|Number=Plur|Person=1|PronType=Prs	4	iobj	_	Vform=نَا|Gloss=he,she,it|Translit=nā|LTranslit=huwa
7	كم	كَم	PRON	S---------	_	8	nmod	_	Vform=كَم|Gloss=how_many_/_much|Root=k_m_m|Translit=kam|LTranslit=kam
8	تتكلف	تَكَلَّف	VERB	VIIA-3FS--	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	4	ccomp	_	Vform=تَتَكَلَّفُ|Gloss=be_burdened,be_charged|Root=k_l_f|Translit=tatakallafu|LTranslit=takallaf
9	هذه	هٰذَا	DET	SD----FS1-	Case=Nom|Gender=Fem|Number=Sing|PronType=Dem	10	det	_	Vform=هٰذِهِ|Gloss=this,these|Root=h|Translit=hāḏihi|LTranslit=hāḏā
10	العمليات	عَمَلِيَّة	NOUN	N------P1D	Case=Nom|Definite=Def|Number=Plur	8	nsubj	_	SpaceAfter=No|Vform=اَلعَمَلِيَّاتُ|Gloss=operation,mission,process|Root=`_m_l|Translit=al-ʿamalīyātu|LTranslit=ʿamalīyat
11	.	.	PUNCT	G---------	_	1	punct	_	SpaceAfter=No|Vform=.|Translit=.
12	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 acl	color:blue
1	أخطأ	أَخطَأ	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	0	root	_	Vform=أَخطَأَ|Gloss=be_wrong,do_incorrectly|Root=_h_.t_'|Translit=ʾaḫṭaʾa|LTranslit=ʾaḫṭaʾ
2	الذين	الذين	X	U---------	_	1	nsubj	_	Vform=الذين|Translit=Al*yn
3	اعتقدوا	اِعتَقَد	VERB	VP-A-3MP--	Aspect=Perf|Gender=Masc|Number=Plur|Person=3|Voice=Act	2	acl	_	Vform=اِعتَقَدُوا|Gloss=believe|Root=`_q_d|Translit=iʿtaqadū|LTranslit=iʿtaqad
4	أن	أَنَّ	CONJ	C---------	_	8	mark	_	Vform=أَنَّ|Gloss=that|Root='_n|Translit=ʾanna|LTranslit=ʾanna
5	هجمات	هَجمَة	NOUN	N------P4R	Case=Acc|Definite=Red|Number=Plur	8	nsubj	_	Vform=هَجَمَاتِ|Gloss=attack,assault,strike|Root=h_^g_m|Translit=haǧamāti|LTranslit=haǧmat
6	11	11	NUM	Q---------	NumForm=Digit	5	nummod	_	Vform=١١|Translit=11
7	سبتمبر	سِبتَمبِر	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	6	nmod	_	Vform=سِبتَمبِرَ|Gloss=September|Root=sibtambir|Translit=sibtambira|LTranslit=sibtambir
8	طلقة	طَلَقَة	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	3	dobj	_	Vform=طَلَقَةٌ|Gloss=shot|Root=.t_l_q|Translit=ṭalaqatun|LTranslit=ṭalaqat
9	مدوية	مُدَوِّي	ADJ	A-----FS1I	Case=Nom|Definite=Ind|Gender=Fem|Number=Sing	8	amod	_	Vform=مُدَوِّيَةٌ|Gloss=ringing,resounding|Root=d_w_y|Translit=mudawwiyatun|LTranslit=mudawwī
10	في	فِي	ADP	P---------	AdpType=Prep	11	case	_	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
11	حرب	حَرب	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	9	nmod	_	Vform=حَربٍ|Gloss=war,warfare|Root=.h_r_b|Translit=ḥarbin|LTranslit=ḥarb
12	بعيدة	بَعِيد	ADJ	A-----FS2I	Case=Gen|Definite=Ind|Gender=Fem|Number=Sing	11	amod	_	SpaceAfter=No|Vform=بَعِيدَةٍ|Gloss=remote,distant,far|Root=b_`_d|Translit=baʿīdatin|LTranslit=baʿīd
13	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~



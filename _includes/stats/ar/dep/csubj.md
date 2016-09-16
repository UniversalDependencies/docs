

--------------------------------------------------------------------------------

## Treebank Statistics (UD_Arabic)

This relation is universal.

527 nodes (0%) are attached to their parents as `csubj`.

527 instances of `csubj` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 4.48576850094877.

The following 14 pairs of parts of speech are connected with `csubj`: [ar-pos/VERB]()-[ar-pos/VERB]() (303; 57% instances), [ar-pos/ADJ]()-[ar-pos/VERB]() (131; 25% instances), [ar-pos/NOUN]()-[ar-pos/VERB]() (47; 9% instances), [ar-pos/PRON]()-[ar-pos/VERB]() (11; 2% instances), [ar-pos/X]()-[ar-pos/VERB]() (10; 2% instances), [ar-pos/VERB]()-[ar-pos/NOUN]() (8; 2% instances), [ar-pos/VERB]()-[ar-pos/ADJ]() (5; 1% instances), [ar-pos/NOUN]()-[ar-pos/ADJ]() (3; 1% instances), [ar-pos/ADP]()-[ar-pos/VERB]() (2; 0% instances), [ar-pos/CONJ]()-[ar-pos/VERB]() (2; 0% instances), [ar-pos/PART]()-[ar-pos/VERB]() (2; 0% instances), [ar-pos/ADJ]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/PRON]()-[ar-pos/ADJ]() (1; 0% instances), [ar-pos/VERB]()-[ar-pos/X]() (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 4 csubj	color:blue
1	و	وَ	CONJ	C---------	_	0	root	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	يتوقع	تَوَقَّع	VERB	VIIP-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	1	parataxis	_	Vform=يُتَوَقَّعُ|Gloss=expect,count_on,anticipate|Root=w_q_`|Translit=yutawaqqaʿu|LTranslit=tawaqqaʿ
3	ان	أَن	CONJ	C---------	_	4	mark	_	Vform=أَن|Gloss=to|Root='_n|Translit=ʾan|LTranslit=ʾan
4	يعود	عَاد	VERB	VISA-3MS--	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	2	csubj	_	Vform=يَعُودَ|Gloss=return,go_back,no_longer|Root=`_w_d|Translit=yaʿūda|LTranslit=ʿād
5	الى	إِلَى	ADP	P---------	AdpType=Prep	6	case	_	Vform=إِلَى|Gloss=to,towards|Root='_l_y|Translit=ʾilā|LTranslit=ʾilā
6	الولايات	وِلَايَة	NOUN	N------P2D	Case=Gen|Definite=Def|Number=Plur	4	nmod	_	Vform=اَلوِلَايَاتِ|Gloss=state,province|Root=w_l_y|Translit=al-wilāyāti|LTranslit=wilāyat
7	المتحدة	مُتَّحِد	ADJ	A-----FS2D	Case=Gen|Definite=Def|Gender=Fem|Number=Sing	6	amod	_	Vform=اَلمُتَّحِدَةِ|Gloss=united|Root=w_.h_d|Translit=al-muttaḥidati|LTranslit=muttaḥid
8	في	فِي	ADP	P---------	AdpType=Prep	9	case	_	Vform=فِي|Gloss=in|Root=fI|Translit=fī|LTranslit=fī
9	25	25	NUM	Q---------	NumForm=Digit	4	advmod	_	Vform=٢٥|Translit=25
10	تموز	تَمُّوز	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	9	nmod	_	SpaceAfter=No|Vform=تَمُّوزَ|Gloss=July|Root=tammUz|Translit=tammūza|LTranslit=tammūz
11	/	/	PUNCT	G---------	_	12	punct	_	SpaceAfter=No|Vform=/|Translit=/
12	يوليو	يُولِيُو	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	10	appos	_	SpaceAfter=No|Vform=يُولِيُو|Gloss=July|Root=yUliyU|Translit=yūliyū|LTranslit=yūliyū
13	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 csubj	color:blue
1	و	وَ	CONJ	C---------	_	0	root	_	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	من	مِن	ADP	P---------	AdpType=Prep	3	case	_	Vform=مِن|Gloss=from|Root=min|Translit=min|LTranslit=min
3	المتوقع	مُتَوَقَّع	ADJ	A-----MS2D	Case=Gen|Definite=Def|Gender=Masc|Number=Sing	1	parataxis	_	Vform=اَلمُتَوَقَّعِ|Gloss=expected,anticipated|Root=w_q_`|Translit=al-mutawaqqaʿi|LTranslit=mutawaqqaʿ
4	ان	أَن	CONJ	C---------	_	5	mark	_	Vform=أَن|Gloss=to|Root='_n|Translit=ʾan|LTranslit=ʾan
5	يعلن	أَعلَن	VERB	VISP-3MS--	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	3	csubj	_	Vform=يُعلَنَ|Gloss=announce,declare|Root=`_l_n|Translit=yuʿlana|LTranslit=ʾaʿlan
6	عن	عَن	ADP	P---------	AdpType=Prep	7	case	_	Vform=عَن|Gloss=about,from|Root=`an|Translit=ʿan|LTranslit=ʿan
7	الصفقة	صَفقَة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	5	dobj	_	Vform=اَلصَّفقَةِ|Gloss=deal,transaction|Root=.s_f_q|Translit=aṣ-ṣafqati|LTranslit=ṣafqat
8	الاثنين	اِثنَان	NOUN	N------S4D	Case=Acc|Definite=Def|Number=Sing	5	nmod	_	SpaceAfter=No|Vform=اَلِاثنَينِ|Gloss=Monday|Root=_t_n_y|Translit=al-i-ʼṯnayni|LTranslit=iṯnān
9	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 8 csubj	color:blue
1	1	1	NUM	Q---------	NumForm=Digit	0	root	_	SpaceAfter=No|Vform=١|Translit=1
2	-	-	PUNCT	G---------	_	1	punct	_	Vform=-|Translit=-
3	"	"	PUNCT	G---------	_	1	punct	_	SpaceAfter=No|Vform="|Translit="
4	ليس	لَيس	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	6	cop	_	Vform=لَيسَ|Gloss=be_not,is_not|Root=l_y_s|Translit=laysa|LTranslit=lays
5	ب	بِ	ADP	P---------	AdpType=Prep	6	case	_	Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
6	الضرورة	ضَرُورَة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	1	parataxis	_	Vform=اَلضَّرُورَةِ|Gloss=necessity,need,imperative|Root=.d_r_r|Translit=aḍ-ḍarūrati|LTranslit=ḍarūrat
7	ان	أَن	CONJ	C---------	_	8	mark	_	Vform=أَن|Gloss=to|Root='_n|Translit=ʾan|LTranslit=ʾan
8	يفسر	فَسَّر	VERB	VISP-3MS--	Aspect=Imp|Gender=Masc|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	6	csubj	_	Vform=يُفَسَّرَ|Gloss=explain,interpret|Root=f_s_r|Translit=yufassara|LTranslit=fassar
9	الكتاب	كِتَاب	NOUN	N------S1D	Case=Nom|Definite=Def|Number=Sing	8	nsubjpass	_	Vform=اَلكِتَابُ|Gloss=book|Root=k_t_b|Translit=al-kitābu|LTranslit=kitāb
10	المقدس	مُقَدَّس	ADJ	A-----MS1D	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	9	amod	_	Vform=اَلمُقَدَّسُ|Gloss=holy,sacred|Root=q_d_s|Translit=al-muqaddasu|LTranslit=muqaddas
11	تفسيرا	تَفسِير	NOUN	N------S4I	Case=Acc|Definite=Ind|Number=Sing	8	nmod	_	Vform=تَفسِيرًا|Gloss=explanation,commentary,exegesis,Quranic_commentary|Root=f_s_r|Translit=tafsīran|LTranslit=tafsīr
12	حرفيا	حَرفِيّ	ADJ	A-----MS4I	Case=Acc|Definite=Ind|Gender=Masc|Number=Sing	11	amod	_	SpaceAfter=No|Vform=حَرفِيًّا|Gloss=literal|Root=.h_r_f|Translit=ḥarfīyan|LTranslit=ḥarfīy
13	.	.	PUNCT	G---------	_	1	punct	_	Vform=.|Translit=.

~~~



---
layout: base
title:  'Statistics of root in UD_Arabic-PADT'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PADT: Relations: `root`

This relation is universal.

7664 nodes (3%) are attached to their parents as `root`.

7664 instances of `root` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.65605427974948.

The following 14 pairs of parts of speech are connected with `root`: -<tt><a href="ar_padt-pos-CCONJ.html">CCONJ</a></tt> (4145; 54% instances), -<tt><a href="ar_padt-pos-VERB.html">VERB</a></tt> (1904; 25% instances), -<tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt> (820; 11% instances), -<tt><a href="ar_padt-pos-X.html">X</a></tt> (470; 6% instances), -<tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt> (129; 2% instances), -<tt><a href="ar_padt-pos-NUM.html">NUM</a></tt> (117; 2% instances), -<tt><a href="ar_padt-pos-DET.html">DET</a></tt> (28; 0% instances), -<tt><a href="ar_padt-pos-PART.html">PART</a></tt> (20; 0% instances), -<tt><a href="ar_padt-pos-PRON.html">PRON</a></tt> (8; 0% instances), -<tt><a href="ar_padt-pos-ADV.html">ADV</a></tt> (6; 0% instances), -<tt><a href="ar_padt-pos-ADP.html">ADP</a></tt> (5; 0% instances), -<tt><a href="ar_padt-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances), -<tt><a href="ar_padt-pos-PROPN.html">PROPN</a></tt> (4; 0% instances), -<tt><a href="ar_padt-pos-SCONJ.html">SCONJ</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	و	وَ	CCONJ	C---------	_	0	root	0:root	Vform=وَ|Gloss=and|Root=wa|Translit=wa|LTranslit=wa
2	أكد	أَكَّد	VERB	VP-A-3MS--	Aspect=Perf|Gender=Masc|Number=Sing|Person=3|Voice=Act	1	parataxis	1:parataxis	Vform=أَكَّدَ|Gloss=affirm,assure,confirm,guarantee,emphasize|Root='_k_d|Translit=ʾakkada|LTranslit=ʾakkad
3	ان	أَنَّ	SCONJ	C---------	_	7	mark	7:mark	Vform=أَنَّ|Gloss=that|Root='_n|Translit=ʾanna|LTranslit=ʾanna
4	"	"	PUNCT	G---------	_	7	punct	7:punct	SpaceAfter=No|Vform="|Translit="
5	بطارية	بَطَّارِيَّة	NOUN	N------S4R	Case=Acc|Definite=Cons|Number=Sing	7	nsubj	7:nsubj	Vform=بَطَّارِيَّةَ|Gloss=battery|Root=ba.t.tAr|Translit=baṭṭārīyata|LTranslit=baṭṭārīyat
6	المدفعية	مِدفَعِيَّة	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	5	nmod	5:nmod:gen	Vform=اَلمِدفَعِيَّةِ|Gloss=artillery|Root=d_f_`|Translit=al-midfaʿīyati|LTranslit=midfaʿīyat
7	قصفت	قَصَف	VERB	VP-A-3FS--	Aspect=Perf|Gender=Fem|Number=Sing|Person=3|Voice=Act	2	ccomp	2:ccomp	Vform=قَصَفَت|Gloss=bomb,shell|Root=q_.s_f|Translit=qaṣafat|LTranslit=qaṣaf
8	على	عَلَى	ADP	P---------	AdpType=Prep	9	case	9:case	Vform=عَلَى|Gloss=on,above|Root=`_l_w|Translit=ʿalā|LTranslit=ʿalā
9	الفور	الفور	X	U---------	_	7	obl	7:obl:عَلَى	SpaceAfter=No|Vform=الفور|Root=OOV|Translit=ālfwr
10	.	.	PUNCT	G---------	_	1	punct	1:punct	Vform=.|Translit=.

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 6 root	color:blue
1	ميراث	مِيرَاث	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	6	nsubj	6:nsubj	Vform=مِيرَاثٌ|Gloss=inheritance,heritage|Root=w_r__t|Translit=mīrāṯun|LTranslit=mīrāṯ
2	ب	بِ	ADP	P---------	AdpType=Prep	3	case	3:case	SpaceAfter=No|Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
3	300	300	NUM	Q---------	NumForm=Digit	1	nummod	1:nummod	Vform=٣٠٠|Translit=300
4	الف	أَلف	NUM	QM-----S2R	Case=Gen|Definite=Cons|Number=Sing|NumForm=Word	3	nummod	3:nummod	Vform=أَلفِ|Gloss=thousand|Root='_l_f|Translit=ʾalfi|LTranslit=ʾalf
5	دولار	دُولَار	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	4	nmod	4:nmod:gen	Vform=دُولَارٍ|Gloss=dollar|Root=dUlAr|Translit=dūlārin|LTranslit=dūlār
6	يقلب	قَلَّب	VERB	VIIA-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	0:root	Vform=يُقَلِّبُ|Gloss=turn_upside_down|Root=q_l_b|Translit=yuqallibu|LTranslit=qallab
7	حياة	حَيَاة	NOUN	N------S4R	Case=Acc|Definite=Cons|Number=Sing	6	obj	6:obj	Vform=حَيَاةَ|Gloss=life|Root=.h_y_y|Translit=ḥayāta|LTranslit=ḥayāt
8	متشرد	مُتَشَرِّد	ADJ	A-----MS2I	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	7	amod	7:amod	Vform=مُتَشَرِّدٍ|Gloss=homeless,displaced|Root=^s_r_d|Translit=mutašarridin|LTranslit=mutašarrid
9	اميركي	أَمِيرِكِيّ	ADJ	A-----MS2I	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	8	amod	8:amod	Vform=أَمِيرِكِيٍّ|Gloss=American|Root='amIrik|Translit=ʾamīrikīyin|LTranslit=ʾamīrikīy

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 0	bgColor:blue
# visual-style 0	fgColor:white
# visual-style 0 1 root	color:blue
1	جائزة	جَائِزَة	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	0	root	0:root	Vform=جَائِزَةُ|Gloss=prize,reward|Root=^g_w_z|Translit=ǧāʾizatu|LTranslit=ǧāʾizat
2	النمسا	اَلنِّمسَا	X	X---------	Foreign=Yes	1	nmod	1:nmod	Vform=اَلنِّمسَا|Gloss=Austria|Root=nims|Translit=an-nimsā|LTranslit=an-nimsā
3	الكبرى	أَكبَر	ADJ	A-----FS1D	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	amod	1:amod	Vform=اَلكُبرَى|Gloss=great,major,significant|Root=k_b_r|Translit=al-kubrā|LTranslit=ʾakbar
4	:	:	PUNCT	G---------	_	5	punct	5:punct	Vform=:|Translit=:
5	انسحاب	اِنسِحَاب	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	1	conj	0:root|1:conj	Vform=اِنسِحَابُ|Gloss=withdrawal,evacuation,pulling_out|Root=s_.h_b|Translit=insiḥābu|LTranslit=insiḥāb
6	الايرلندي	إِيرلَندِيّ	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	5	nmod	5:nmod:gen	Vform=اَلإِيرلَندِيِّ|Gloss=Irish|Root='Irland|Translit=al-ʾīrlandīyi|LTranslit=ʾīrlandīy
7	ايرفاين	إِيرفَاين	X	X---------	Foreign=Yes	6	nmod	6:nmod	Vform=إِيرفَاين|Gloss=Irvine|Root='IrfAyn|Translit=ʾīrfāyn|LTranslit=ʾīrfāyn

~~~



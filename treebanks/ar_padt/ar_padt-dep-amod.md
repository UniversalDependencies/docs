---
layout: base
title:  'Statistics of amod in UD_Arabic-PADT'
udver: '2'
---

## Treebank Statistics: UD_Arabic-PADT: Relations: `amod`

This relation is universal.

22775 nodes (8%) are attached to their parents as `amod`.

22695 instances of `amod` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.31481888035126.

The following 10 pairs of parts of speech are connected with `amod`: <tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt> (22103; 97% instances), <tt><a href="ar_padt-pos-X.html">X</a></tt>-<tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt> (244; 1% instances), <tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt> (240; 1% instances), <tt><a href="ar_padt-pos-NUM.html">NUM</a></tt>-<tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt> (134; 1% instances), <tt><a href="ar_padt-pos-PRON.html">PRON</a></tt>-<tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt> (25; 0% instances), <tt><a href="ar_padt-pos-VERB.html">VERB</a></tt>-<tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt> (11; 0% instances), <tt><a href="ar_padt-pos-DET.html">DET</a></tt>-<tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt> (7; 0% instances), <tt><a href="ar_padt-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ar_padt-pos-DET.html">DET</a></tt> (4; 0% instances), <tt><a href="ar_padt-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt> (4; 0% instances), <tt><a href="ar_padt-pos-PART.html">PART</a></tt>-<tt><a href="ar_padt-pos-ADJ.html">ADJ</a></tt> (3; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 amod	color:blue
1	جائزة	جَائِزَة	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	0	root	0:root	Gloss=prize,reward|LTranslit=ǧāʾizat|Root=^g w z|Translit=ǧāʾizatu|Vform=جَائِزَةُ
2	النمسا	اَلنِّمسَا	X	X---------	Foreign=Yes	1	nmod	1:nmod	Gloss=Austria|LTranslit=an-nimsā|Root=nims|Translit=an-nimsā|Vform=اَلنِّمسَا
3	الكبرى	أَكبَر	ADJ	A-----FS1D	Case=Nom|Definite=Def|Gender=Fem|Number=Sing	1	amod	1:amod	Gloss=great,major,significant|LTranslit=ʾakbar|Root=k b r|Translit=al-kubrā|Vform=اَلكُبرَى
4	:	:	PUNCT	G---------	_	5	punct	5:punct	Vform=:|Translit=:
5	انسحاب	اِنسِحَاب	NOUN	N------S1R	Case=Nom|Definite=Cons|Number=Sing	1	conj	0:root|1:conj	Vform=اِنسِحَابُ|Gloss=withdrawal,evacuation,pulling_out|Root=s .h b|Translit=insiḥābu|LTranslit=insiḥāb
6	الايرلندي	إِيرلَندِيّ	NOUN	N------S2D	Case=Gen|Definite=Def|Number=Sing	5	nmod	5:nmod:gen	Vform=اَلإِيرلَندِيِّ|Gloss=Irish|Root='Irland|Translit=al-ʾīrlandīyi|LTranslit=ʾīrlandīy
7	ايرفاين	إِيرفَاين	X	X---------	Foreign=Yes	6	nmod	6:nmod	Vform=إِيرفَاين|Gloss=Irvine|Root='IrfAyn|Translit=ʾīrfāyn|LTranslit=ʾīrfāyn

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 amod	color:blue
1	البعد	البعد	X	U---------	_	0	root	0:root	Vform=البعد|Root=OOV|Translit=ālbʿd
2	الآخر	آخَر	ADJ	A-----MS1D	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	1	amod	1:amod	Vform=اَلآخَرُ|Gloss=other,another|Root=' _h r|Translit=al-ʾāḫaru|LTranslit=ʾāḫar

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 amod	color:blue
1	ميراث	مِيرَاث	NOUN	N------S1I	Case=Nom|Definite=Ind|Number=Sing	6	nsubj	6:nsubj	Vform=مِيرَاثٌ|Gloss=inheritance,heritage|Root=w r _t|Translit=mīrāṯun|LTranslit=mīrāṯ
2	ب	بِ	ADP	P---------	AdpType=Prep	3	case	3:case	SpaceAfter=No|Vform=بِ|Gloss=by,with|Root=bi|Translit=bi|LTranslit=bi
3	300	300	NUM	Q---------	NumForm=Digit	1	nummod	1:nummod	Vform=٣٠٠|Translit=300
4	الف	أَلف	NUM	QM-----S2R	Case=Gen|Definite=Cons|Number=Sing|NumForm=Word	3	nmod	3:nmod:gen	Vform=أَلفِ|Gloss=thousand|Root=' l f|Translit=ʾalfi|LTranslit=ʾalf
5	دولار	دُولَار	NOUN	N------S2I	Case=Gen|Definite=Ind|Number=Sing	4	nmod	4:nmod:gen	Vform=دُولَارٍ|Gloss=dollar|Root=dUlAr|Translit=dūlārin|LTranslit=dūlār
6	يقلب	قَلَّب	VERB	VIIA-3MS--	Aspect=Imp|Gender=Masc|Mood=Ind|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	0	root	0:root	Vform=يُقَلِّبُ|Gloss=turn_upside_down|Root=q l b|Translit=yuqallibu|LTranslit=qallab
7	حياة	حَيَاة	NOUN	N------S4R	Case=Acc|Definite=Cons|Number=Sing	6	obj	6:obj	Vform=حَيَاةَ|Gloss=life|Root=.h y y|Translit=ḥayāta|LTranslit=ḥayāt
8	متشرد	مُتَشَرِّد	ADJ	A-----MS2I	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	7	nmod	7:nmod:gen	Vform=مُتَشَرِّدٍ|Gloss=homeless,displaced|Root=^s r d|Translit=mutašarridin|LTranslit=mutašarrid
9	اميركي	أَمِيرِكِيّ	ADJ	A-----MS2I	Case=Gen|Definite=Ind|Gender=Masc|Number=Sing	8	amod	8:amod	Vform=أَمِيرِكِيٍّ|Gloss=American|Root='amIrik|Translit=ʾamīrikīyin|LTranslit=ʾamīrikīy

~~~



---
layout: base
title:  'Statistics of flat:name in UD_Kazakh'
udver: '2'
---

## Treebank Statistics: UD_Kazakh: Relations: `flat:name`

This relation is a language-specific subtype of .

108 nodes (1%) are attached to their parents as `flat:name`.

108 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.37962962962963.

The following 12 pairs of parts of speech are connected with `flat:name`: <tt><a href="kk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk-pos-PROPN.html">PROPN</a></tt> (45; 42% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-PROPN.html">PROPN</a></tt> (25; 23% instances), <tt><a href="kk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (13; 12% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (8; 7% instances), <tt><a href="kk-pos-NUM.html">NUM</a></tt>-<tt><a href="kk-pos-PROPN.html">PROPN</a></tt> (6; 6% instances), <tt><a href="kk-pos-NUM.html">NUM</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (4; 4% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (2; 2% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-PROPN.html">PROPN</a></tt> (1; 1% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-ADJ.html">ADJ</a></tt> (1; 1% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="kk-pos-PART.html">PART</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (1; 1% instances), <tt><a href="kk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk-pos-X.html">X</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 flat:name	color:blue
1	Дмитрий	Дмитрий	PROPN	np	Case=Nom|Gender=Masc	7	nsubj	_	_
2	Медведевтің	Медведев	PROPN	np	Case=Gen|Gender=Masc	1	flat:name	_	_
3	Астанаға	Астана	PROPN	np	Case=Dat	7	obl	_	_
4	сапары	сапар	NOUN	n	Case=Nom|Number[psor]=Plur,Sing|Person[psor]=3	7	obl	_	_
5	22	22	NUM	num	NumType=Ord	6	amod	_	_
6	мамырға	мамыр	NOUN	n	Case=Dat	7	obl	_	_
7	жоспарланып	жоспарла	VERB	v	Aspect=Perf|VerbForm=Cov|Voice=Pass	0	root	_	_
8	отыр	отыр	AUX	vaux	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	SpaceAfter=No
9	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 flat:name	color:blue
1	Макроэкономикалық	макроэкономикалық	ADJ	adj	_	2	amod	_	_
2	көрсеткіштер	көрсеткіш	NOUN	n	Case=Nom|Number=Plur	3	nsubj	_	_
3	жаман	жаман	ADJ	adj	_	7	ccomp	_	_
4	емес	е	AUX	cop	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Aor|VerbForm=Fin	3	cop	_	SpaceAfter=No
5	,	,	PUNCT	cm	_	3	punct	_	_
6	-	-	PUNCT	guio	_	7	punct	_	_
7	деді	де	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
8	Г.	Г.	NOUN	abbr	_	7	nsubj	_	_
9	Марченко	Марченко	PROPN	np	Case=Nom	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	sent	_	7	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 flat:name	color:blue
1	Жарыс	жарыс	NOUN	n	Case=Nom	8	nsubj	_	_
2	«	«	PUNCT	lquot	_	3	punct	_	SpaceAfter=No
3	Дәулет	Дәулет	PROPN	np	Case=Nom	8	obl	_	SpaceAfter=No
4	»	»	PUNCT	rquot	_	3	punct	_	_
5	ұлттық	ұлттық	ADJ	adj	_	6	amod	_	_
6	теннис	теннис	NOUN	n	Case=Nom	7	nmod:poss	_	_
7	орталығында	орталық	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	3	flat:name	_	_
8	өтті	өт	VERB	v	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
9	.	.	PUNCT	sent	_	8	punct	_	_

~~~



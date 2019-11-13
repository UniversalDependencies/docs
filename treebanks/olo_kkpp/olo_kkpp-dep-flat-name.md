---
layout: base
title:  'Statistics of flat:name in UD_Livvi-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Livvi-KKPP: Relations: `flat:name`

This relation is a language-specific subtype of .

11 nodes (1%) are attached to their parents as `flat:name`.

11 instances of `flat:name` (100%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.

The following 3 pairs of parts of speech are connected with `flat:name`: <tt><a href="olo_kkpp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="olo_kkpp-pos-PROPN.html">PROPN</a></tt> (9; 82% instances), <tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 9% instances), <tt><a href="olo_kkpp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 9% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Ei	ei	AUX	AUX	Mood=Ind|Person=0|Tense=Pres	3	aux:neg	_	_
2	voidu	voija	AUX	AUX	Connegative=Yes|Mood=Ind|Number=Plur|Tense=Past|Voice=Pass	3	aux	_	_
3	vallita	vallita	VERB	VERB	VerbForm=Inf	0	root	_	_
4	Peter	Peter	PROPN	PROPN	Case=Nom|Number=Sing	3	obj	_	_
5	Smithua	Smith	PROPN	PROPN	Case=Par|Number=Sing	4	flat:name	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	8	punct	_	_
7	eigo	ja#ei	CCONJ	CCONJ	Number=Plur|Person=3|Polarity=Neg	8	cc	_	_
8	Mary	Mary	PROPN	PROPN	Case=Nom|Number=Sing	5	conj	_	_
9	Brownii	Brown	PROPN	PROPN	Case=Par|Number=Sing	8	flat:name	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 19	bgColor:blue
# visual-style 19	fgColor:white
# visual-style 18	bgColor:blue
# visual-style 18	fgColor:white
# visual-style 18 19 flat:name	color:blue
1	Matkah	matka	NOUN	NOUN	Case=Ill|Number=Sing	2	obl	_	_
2	yhtyigi	yhtyö	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	Periodika-julguamo	Periodika-julguamo	NOUN	NOUN	Case=Nom|Number=Sing	2	nsubj	_	SpaceAfter=No
4	,	,	PUNCT	PUNCT	_	2	punct	_	_
5	festivualil	festivuali	NOUN	NOUN	Case=Ade|Number=Plur	8	obl	_	_
6	sai	suaja	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	2	conj	_	_
7	ostua	ostua	VERB	VERB	VerbForm=Inf	6	ccomp	_	_
8	kniigua	kniigu	NOUN	NOUN	Case=Par|Number=Sing	7	obj	_	SpaceAfter=No
9	,	,	PUNCT	PUNCT	_	10	punct	_	_
10	lehtie	lehti	NOUN	NOUN	Case=Par|Number=Sing	8	conj	_	_
11	da	da	CCONJ	CCONJ	_	14	cc	_	_
12	žurnualua	žurnualu	NOUN	NOUN	Case=Par|Number=Sing	8	conj	_	_
13	kanzallizil	kanzalline	ADJ	ADJ	Case=Abl|Number=Plur	16	amod	_	_
14	kielil	kieli	NOUN	NOUN	Case=Ade|Number=Plur	7	obl	_	SpaceAfter=No
15	,	,	PUNCT	PUNCT	_	16	punct	_	_
16	saigi	suaha	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	6	conj	_	_
17	tilata	tilata	VERB	VERB	Connegative=Yes|Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	16	ccomp	_	_
18	Oma	Oma	ADJ	ADJ	Case=Acc|Number=Sing	17	obj	_	_
19	Mua	Mua	NOUN	NOUN	Case=Acc|Number=Sing	18	flat:name	_	_
20	-lehti	-lehti	NOUN	NOUN	Case=Acc|Number=Sing	18	compound	_	SpaceAfter=No
21	.	.	PUNCT	PUNCT	_	17	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 flat:name	color:blue
1	Festivualin	festivuali	NOUN	NOUN	Case=Ins|Number=Plur	2	nmod	_	_
2	järjestäjänny	järjestiä	VERB	VERB	Case=Ess|Number=Sing|Tense=Pres|VerbForm=Part|Voice=Act	3	obl	_	_
3	on	olla	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
4	Anuksen	Anus	PROPN	PROPN	Case=Gen|Number=Sing	3	nsubj	_	_
5	karjalazet	karjalaine	NOUN	NOUN	Case=Nom|Number=Plur	4	flat:name	_	_
6	-liitto	-liitto	NOUN	NOUN	Case=Nom|Number=Sing	5	compound	_	SpaceAfter=No
7	,	,	PUNCT	PUNCT	_	10	punct	_	_
8	projektua	projektu	NOUN	NOUN	Case=Par|Number=Sing	10	obj	_	_
9	jengal	jengu	NOUN	NOUN	Case=Ade|Number=Sing	10	obl	_	_
10	kannattau	kannattua	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
11	Kandurahvahien	Kandurahvas	NOUN	NOUN	Case=Gen|Number=Plur	13	nmod:poss	_	_
12	välialovehine	välialovehine	ADJ	ADJ	Case=Nom|Number=Sing	13	amod	_	_
13	kannatuskeskus	kannatus#keskus	NOUN	NOUN	Case=Nom|Number=Sing	10	nsubj	_	SpaceAfter=No
14	.	.	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No

~~~



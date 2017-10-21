---
layout: base
title:  'Statistics of csubj in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Relations: `csubj`

This relation is universal.

552 nodes (0%) are attached to their parents as `csubj`.

358 instances of `csubj` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.67391304347826.

The following 24 pairs of parts of speech are connected with `csubj`: <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (204; 37% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (134; 24% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (97; 18% instances), <tt><a href="nl-pos-AUX.html">AUX</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (31; 6% instances), <tt><a href="nl-pos-ADV.html">ADV</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (11; 2% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (10; 2% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (10; 2% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (8; 1% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (7; 1% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (5; 1% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (5; 1% instances), <tt><a href="nl-pos-PRON.html">PRON</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (5; 1% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (4; 1% instances), <tt><a href="nl-pos-ADV.html">ADV</a></tt>-<tt><a href="nl-pos-AUX.html">AUX</a></tt> (3; 1% instances), <tt><a href="nl-pos-DET.html">DET</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="nl-pos-X.html">X</a></tt>-<tt><a href="nl-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="nl-pos-X.html">X</a></tt>-<tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (2; 0% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="nl-pos-AUX.html">AUX</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nl-pos-DET.html">DET</a></tt>-<tt><a href="nl-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-ADV.html">ADV</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 10 csubj	color:blue
1	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	3	punct	_	SpaceAfter=No
2	Het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	3	nsubj	_	_
3	duurde	duur	VERB	V|intrans|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Subcat=Intr|Tense=Past|VerbForm=Fin	0	root	_	_
4	lang	lang	ADJ	Adj|adv|stell|onverv	Degree=Pos|Variant=Short	3	obl	_	_
5	voordat	voordat	SCONJ	Conj|onder|metfin	_	10	mark	_	_
6	ze	ze	PRON	Pron|per|3|evofmv|nom	Case=Nom|Number=Plur,Sing|Person=3|PronType=Prs	10	nsubj	_	_
7	over	over	ADP	Prep|voor	AdpType=Prep	8	case	_	_
8	me	me	PRON	Pron|per|1|ev|datofacc	Case=Acc,Dat|Number=Sing|Person=1|PronType=Prs	10	obl	_	_
9	heen	heen	ADP	Prep|comb	AdpType=Circ	7	fixed	_	_
10	kwamen	kom	VERB	V|intrans|ovt|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Intr|Tense=Past|VerbForm=Fin	3	csubj	_	SpaceAfter=No
11	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	SpaceAfter=No
12	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 csubj	color:blue
1	Boogerd	Boogerd	VERB	V|trans|verldw|onverv	Subcat=Tran|Tense=Past|VerbForm=Part	3	csubj	_	_
2	werd	word	AUX	V|hulpofkopp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	3	cop	_	_
3	derde	derde	ADJ	Num|rang|bep|zelfst|onverv	Definite=Def|NumType=Ord	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punc|komma	PunctType=Comm	6	punct	_	_
5	Kemna	Kemna	PROPN	N|eigen|ev|neut	Number=Sing	6	cop	_	_
6	tweede	tweede	ADJ	Num|rang|bep|zelfst|onverv	Definite=Def|NumType=Ord	3	conj	_	SpaceAfter=No
7	,	,	PUNCT	Punc|komma	PunctType=Comm	11	punct	_	_
8	maar	maar	CCONJ	Conj|neven	_	11	cc	_	_
9	Koerts	Koerts	PROPN	N|eigen|ev|neut	Number=Sing	11	nsubj	_	_
10	was	ben	AUX	V|hulpofkopp|ovt|1of2of3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	11	cop	_	_
11	ongenaakbaar	ongenaakbaar	ADJ	Adj|attr|stell|onverv	Degree=Pos	3	conj	_	SpaceAfter=No
12	.	.	PUNCT	Punc|punt	PunctType=Peri	3	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 11 csubj	color:blue
1	Het	het	PRON	Pron|onbep|neut|zelfst	PronType=Ind	5	nsubj	_	_
2	is	ben	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	een	een	DET	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	5	det	_	_
4	publiek	publiek	NOUN	N|soort|ev|neut	Number=Sing	5	nmod	_	_
5	geheim	geheim	NOUN	N|soort|ev|neut	Number=Sing	0	root	_	_
6	dat	dat	SCONJ	Conj|onder|metfin	_	11	mark	_	_
7	er	er	ADV	Adv|gew|er	AdvType=Ex	11	advmod	_	_
8	in	in	ADP	Prep|voor	AdpType=Prep	9	case	_	_
9	Limburg	Limburg	PROPN	N|eigen|ev|neut	Number=Sing	11	obl	_	_
10	atoomwapens	atoomwapen	NOUN	N|soort|mv|neut	Number=Plur	11	nsubj	_	_
11	liggen	lig	VERB	V|intrans|ott|1of2of3|mv	Aspect=Imp|Mood=Ind|Number=Plur|Subcat=Intr|Tense=Pres|VerbForm=Fin	5	csubj	_	_

~~~



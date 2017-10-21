---
layout: base
title:  'Statistics of punct in UD_Dutch'
udver: '2'
---

## Treebank Statistics: UD_Dutch: Relations: `punct`

This relation is universal.

22338 nodes (11%) are attached to their parents as `punct`.

17925 instances of `punct` (80%) are left-to-right (parent precedes child).
Average distance between parent and child is 7.95106992568717.

The following 16 pairs of parts of speech are connected with `punct`: <tt><a href="nl-pos-VERB.html">VERB</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (11552; 52% instances), <tt><a href="nl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (4869; 22% instances), <tt><a href="nl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (1480; 7% instances), <tt><a href="nl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (1302; 6% instances), <tt><a href="nl-pos-AUX.html">AUX</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (906; 4% instances), <tt><a href="nl-pos-PRON.html">PRON</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (600; 3% instances), <tt><a href="nl-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (415; 2% instances), <tt><a href="nl-pos-ADV.html">ADV</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (353; 2% instances), <tt><a href="nl-pos-X.html">X</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (251; 1% instances), <tt><a href="nl-pos-DET.html">DET</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (199; 1% instances), <tt><a href="nl-pos-NUM.html">NUM</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (137; 1% instances), <tt><a href="nl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (134; 1% instances), <tt><a href="nl-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (60; 0% instances), <tt><a href="nl-pos-ADP.html">ADP</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (46; 0% instances), <tt><a href="nl-pos-SYM.html">SYM</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (29; 0% instances), <tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="nl-pos-PUNCT.html">PUNCT</a></tt> (5; 0% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 1 punct	color:blue
1	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	7	punct	_	SpaceAfter=No
2	Mijn	mijn	PRON	Pron|bez|1|ev|neut|attr	Number=Sing|Person=1|Poss=Yes|PronType=Prs	3	nmod	_	_
3	basisniveau	basis_niveau	NOUN	N|soort|ev|neut	Number=Sing	7	nsubj	_	_
4	is	ben	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	7	aux	_	_
5	flink	flink	ADJ	Adj|adv|stell|onverv	Degree=Pos|Variant=Short	7	obl	_	_
6	omhoog	omhoog	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	7	advmod	_	_
7	gegaan	ga	VERB	V|intrans|verldw|onverv	Subcat=Intr|Tense=Past|VerbForm=Part	0	root	_	SpaceAfter=No
8	.	.	PUNCT	Punc|punt	PunctType=Peri	7	punct	_	SpaceAfter=No
9	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	7	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 punct	color:blue
1	Ik	ik	PRON	Pron|per|1|ev|nom	Case=Nom|Number=Sing|Person=1|PronType=Prs	5	nsubj	_	_
2	ben	ben	AUX	V|hulpofkopp|ott|1|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	5	cop	_	_
3	nogal	nogal	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	5	advmod	_	_
4	een	een	DET	Art|onbep|zijdofonzijd|neut	Definite=Ind|Number=Sing|PronType=Art	5	det	_	_
5	twijfelaar	twijfelaar	NOUN	N|soort|ev|neut	Number=Sing	0	root	_	SpaceAfter=No
6	.	.	PUNCT	Punc|punt	PunctType=Peri	5	punct	_	_
7	"	"	PUNCT	Punc|aanhaaldubb	PunctType=Quot	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 11 12 punct	color:blue
1	Van	van	ADP	Prep|voor	AdpType=Prep	5	case	_	_
2	meer	meer	DET	Num|hoofd|onbep|attr|vergr|onverv	Degree=Cmp|NumType=Card|PronType=Ind	5	det:nummod	_	_
3	dan	dan	SCONJ	Conj|onder|metfin	_	4	mark	_	_
4	twee	twee	NUM	Num|hoofd|bep|attr|onverv	Definite=Def|NumType=Card	2	obl	_	_
5	grastoernooien	gras_toernooi	NOUN	N|soort|mv|neut	Number=Plur	11	obl	_	_
6	op	op	ADP	Prep|voor	AdpType=Prep	7	case	_	_
7	rij	rij	NOUN	N|soort|ev|neut	Number=Sing	5	nmod	_	_
8	wordt	word	AUX	V|hulpofkopp|ott|3|ev	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	11	cop	_	_
9	hij	hij	PRON	Pron|per|3|ev|nom	Case=Nom|Number=Sing|Person=3|PronType=Prs	11	nsubj	_	_
10	te	te	ADV	Adv|gew|geenfunc|stell|onverv	Degree=Pos	11	advmod	_	_
11	moe	moe	ADJ	Adj|attr|stell|onverv	Degree=Pos	0	root	_	SpaceAfter=No
12	.	.	PUNCT	Punc|punt	PunctType=Peri	11	punct	_	_

~~~



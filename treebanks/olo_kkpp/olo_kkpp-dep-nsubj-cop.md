---
layout: base
title:  'Statistics of nsubj:cop in UD_Livvi-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Livvi-KKPP: Relations: `nsubj:cop`

This relation is a language-specific subtype of <tt><a href="olo_kkpp-dep-nsubj.html">nsubj</a></tt>.

26 nodes (2%) are attached to their parents as `nsubj:cop`.

20 instances of `nsubj:cop` (77%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.5.

The following 8 pairs of parts of speech are connected with `nsubj:cop`: <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (10; 38% instances), <tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (6; 23% instances), <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-PRON.html">PRON</a></tt> (4; 15% instances), <tt><a href="olo_kkpp-pos-PRON.html">PRON</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (2; 8% instances), <tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="olo_kkpp-pos-PRON.html">PRON</a></tt> (1; 4% instances), <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-PROPN.html">PROPN</a></tt> (1; 4% instances), <tt><a href="olo_kkpp-pos-NUM.html">NUM</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 4% instances), <tt><a href="olo_kkpp-pos-X.html">X</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 4% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 nsubj:cop	color:blue
1	Tärgienny	tärgie	ADJ	ADJ	Case=Ess|Number=Sing	2	amod	_	_
2	ruavonnu	ruado	NOUN	NOUN	Case=Ess|Number=Sing	0	root	_	_
3	ollah	olla	AUX	AUX	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
4	“	“	PUNCT	PUNCT	_	5	punct	_	SpaceAfter=No
5	ad’voihkäyndy	ad’voihkäyndy	NOUN	NOUN	Case=Nom|Number=Sing	2	nsubj:cop	_	SpaceAfter=No
6	”	”	PUNCT	PUNCT	_	5	punct	_	_
7	da	da	CCONJ	CCONJ	_	8	cc	_	_
8	turistumatkat	turistumatku	NOUN	NOUN	Case=Nom|Number=Plur	5	conj	_	_
9	Tverin	Tver	PROPN	PROPN	Case=Gen|Number=Sing	10	nmod:poss	_	_
10	Karjalah	Karjal	PROPN	PROPN	Case=Ill|Number=Sing	2	obl	_	SpaceAfter=No
11	.	.	PUNCT	PUNCT	_	2	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:cop	color:blue
1	Minun	Minun	PRON	PRON	Case=Abe|Number=Plur|PronType=Prs	2	nmod:poss	_	_
2	tuatto	tuatto	NOUN	NOUN	Case=Nom|Number=Sing	4	nsubj:cop	_	_
3	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	cop	_	_
4	kylmyverizembi	kylmyverini	ADJ	ADJ	Case=Nom|Degree=Cmp|Number=Sing	0	root	_	_
5	migu	migu	SCONJ	SCONJ	_	6	mark	_	_
6	sinun	sinun	PRON	PRON	Case=Abe|Number=Plur|PronType=Prs	4	advcl	_	SpaceAfter=No
7	.	.	PUNCT	PUNCT	_	4	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:cop	color:blue
1	Tämä	Tämä	PRON	PRON	Case=Nom|Number=Sing|PronType=Dem	3	nsubj:cop	_	_
2	on	olla	AUX	AUX	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
3	kirjaine	kirjaine	NOUN	NOUN	Case=Acc|Number=Sing	0	root	_	_
4	Peteras	Peter	PROPN	PROPN	Case=Ela|Number=Sing	3	obl	_	_
5	da	da	CCONJ	CCONJ	_	6	cc	_	_
6	se	se	PRON	PRON	Case=Nom|Number=Sing	7	nsubj	_	_
7	tuodih	tuvva	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	3	conj	_	_
8	egläi	egläi	ADV	ADV	_	7	advmod	_	SpaceAfter=No|PronType=Temp
9	.	.	PUNCT	PUNCT	_	3	punct	_	_

~~~



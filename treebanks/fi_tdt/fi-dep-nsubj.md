---
layout: base
title:  'Statistics of nsubj in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `nsubj`

This relation is universal.
There are 1 language-specific subtypes of `nsubj`: <tt><a href="fi-dep-nsubj-cop.html">nsubj:cop</a></tt>.

11668 nodes (6%) are attached to their parents as `nsubj`.

10298 instances of `nsubj` (88%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.87649982859102.

The following 27 pairs of parts of speech are connected with `nsubj`: <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (6414; 55% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (3033; 26% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (2024; 17% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (57; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (41; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-NUM.html">NUM</a></tt> (21; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-SYM.html">SYM</a></tt> (20; 0% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (17; 0% instances), <tt><a href="fi-pos-AUX.html">AUX</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (7; 0% instances), <tt><a href="fi-pos-AUX.html">AUX</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (5; 0% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (3; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-ADV.html">ADV</a></tt> (3; 0% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (2; 0% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi-pos-ADP.html">ADP</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fi-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="fi-pos-X.html">X</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 3 nsubj	color:blue
1	Se	se	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	3	det	_	_
2	sisäinen	sisäinen	ADJ	A	Case=Nom|Degree=Pos|Derivation=Inen|Number=Sing	3	amod	_	_
3	lapseni	lapsi	NOUN	N	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	6	nsubj	7:nsubj	_
4	ei	ei	AUX	V	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	6	aux	_	_
5	vaan	vaan	ADV	Adv	_	6	advmod	_	_
6	suostu	suostua	VERB	V	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	0	root	_	_
7	katoamaan	kadota	VERB	V	Case=Ill|InfForm=3|Number=Sing|VerbForm=Inf|Voice=Act	6	xcomp	_	SpaceAfter=No
8	.	.	PUNCT	Punct	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 2 nsubj	color:blue
1	“	“	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
2	Mä	minä	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Style=Coll	3	nsubj	_	_
3	painan	painaa	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	6	punct	_	_
5	mä	minä	PRON	Pron	Case=Nom|Number=Sing|Person=1|PronType=Prs|Style=Coll	6	nsubj	_	_
6	painan	painaa	VERB	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	SpaceAfter=No
7	!	!	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
8	”	”	PUNCT	Punct	_	3	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj	color:blue
1	Minttu	Minttu	PROPN	N	Case=Nom|Number=Sing	3	nsubj	_	_
2	muuten	muuten	ADV	Adv	_	3	advmod	_	_
3	väitti	väittää	VERB	V	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	aika	aika	ADV	Adv	_	5	advmod	_	_
5	hartaasti	hartaasti	ADV	Adv	Derivation=Sti	3	advmod	_	_
6	tätä	tämä	PRON	Pron	Case=Par|Number=Sing|PronType=Dem	7	det	_	_
7	paitaa	paita	NOUN	N	Case=Par|Number=Sing	3	obj	_	_
8	hameeksi	hame	NOUN	N	Case=Tra|Number=Sing	3	xcomp:ds	_	SpaceAfter=No
9	!	!	PUNCT	Punct	_	3	punct	_	_

~~~



---
layout: base
title:  'Statistics of aux in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `aux`

This relation is universal.
There are 1 language-specific subtypes of `aux`: <tt><a href="fi-dep-aux-pass.html">aux:pass</a></tt>.

5374 nodes (3%) are attached to their parents as `aux`.

5168 instances of `aux` (96%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.7186453293636.

The following 10 pairs of parts of speech are connected with `aux`: <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (4519; 84% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (380; 7% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (243; 5% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (106; 2% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (88; 2% instances), <tt><a href="fi-pos-AUX.html">AUX</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (15; 0% instances), <tt><a href="fi-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (15; 0% instances), <tt><a href="fi-pos-NUM.html">NUM</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (5; 0% instances), <tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (2; 0% instances), <tt><a href="fi-pos-ADP.html">ADP</a></tt>-<tt><a href="fi-pos-AUX.html">AUX</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 aux	color:blue
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
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 5 aux	color:blue
1	Halvimmat	halpa	ADJ	A	Case=Nom|Degree=Sup|Number=Plur	9	nsubj:cop	_	_
2	mitä	mikä	PRON	Pron	Case=Par|Number=Sing|PronType=Rel	4	obj	_	_
3	olen	olla	AUX	V	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin|Voice=Act	4	aux	_	_
4	nähnyt	nähdä	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	1	acl:relcl	_	_
5	ovat	olla	AUX	V	Mood=Ind|Number=Plur|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	aux	_	_
6	olleet	olla	AUX	V	Case=Nom|Degree=Pos|Number=Plur|PartForm=Past|VerbForm=Part|Voice=Act	9	cop	_	_
7	yli	yli	ADV	Adv	_	8	advmod	_	_
8	400	400	NUM	Num	NumType=Card	9	nummod	_	_
9	euroa	euro	NOUN	N	Case=Par|Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 aux	color:blue
1	Eivätkö	ei	AUX	V	Clitic=Ko|Number=Plur|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	3	aux	_	_
2	olekin	olla	AUX	V	Clitic=Kin|Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin	3	cop	_	_
3	kivat	kiva	ADJ	A	Case=Nom|Degree=Pos|Number=Plur	0	root	_	SpaceAfter=No
4	?	?	PUNCT	Punct	_	3	punct	_	_

~~~



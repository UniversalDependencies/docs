---
layout: base
title:  'Statistics of nmod in UD_Livvi-KKPP'
udver: '2'
---

## Treebank Statistics: UD_Livvi-KKPP: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="olo_kkpp-dep-nmod-poss.html">nmod:poss</a></tt>.

12 nodes (1%) are attached to their parents as `nmod`.

8 instances of `nmod` (67%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.41666666666667.

The following 8 pairs of parts of speech are connected with `nmod`: <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (4; 33% instances), <tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt>-<tt><a href="olo_kkpp-pos-PRON.html">PRON</a></tt> (2; 17% instances), <tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="olo_kkpp-pos-ADJ.html">ADJ</a></tt>-<tt><a href="olo_kkpp-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="olo_kkpp-pos-ADV.html">ADV</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="olo_kkpp-pos-PROPN.html">PROPN</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="olo_kkpp-pos-VERB.html">VERB</a></tt>-<tt><a href="olo_kkpp-pos-NOUN.html">NOUN</a></tt> (1; 8% instances), <tt><a href="olo_kkpp-pos-X.html">X</a></tt>-<tt><a href="olo_kkpp-pos-X.html">X</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 6 nmod	color:blue
1	Muga	muga	ADV	ADV	_	3	advmod	_	_
2	briha	briha	NOUN	NOUN	Case=Nom|Number=Sing	3	nsubj	_	_
3	sai	suaha	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	saaris	saari	NOUN	X	Case=Ine|Number=Sing	3	obl	_	_
5	kaksi	kaksi	NUM	NUM	Case=Nom|Number=Sing|NumType=Card	6	nummod	_	_
6	puččii	pučči	NOUN	X	Case=Par|Number=Sing	7	nmod	_	_
7	d’engaa	d’enga	NOUN	X	Case=Par|Number=Sing	3	obj	_	_
8	da	da	CCONJ	CCONJ	_	9	cc	_	_
9	vie	viijä	VERB	VERB	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	3	conj	_	_
10	kolmas	kolme	NUM	NUM	Case=Nom|Number=Sing|NumType=Ord	9	obj	_	_
11	d’äi	d’äi	ADV	X	_	9	advmod	_	_
12	vellakse	velgu	NOUN	NOUN	Case=Tra|Number=Sing	9	obl	_	SpaceAfter=No
13	.	.	PUNCT	PUNCT	_	3	punct	_	SpaceAfter=No

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 nmod	color:blue
1	Heil	Hyö	PRON	PRON	Case=All|Number=Plur|Person=3|PronType=Prs	0	root	_	_
2	ei	ei	AUX	AUX	Mood=Ind|Number=Sing|Person=3	1	aux	_	_
3	ole	olla	AUX	AUX	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	1	cop:own	_	_
4	ovvostustu	ovvostus	NOUN	NOUN	Case=Par|Number=Sing	1	nsubj:cop	_	_
5	sit	sit	PRON	PRON	Case=Par|Number=Sing	4	nmod	_	SpaceAfter=No
6	,	,	PUNCT	PUNCT	_	9	punct	_	_
7	ken	ken	PRON	PRON	Case=Nom|Number=Sing	9	nsubj	_	PronType=Interr
8	sen	se	PRON	PRON	Case=Gen|Number=Sing|PronType=Dem	9	obj	_	_
9	kirjutti	kirjuttua	VERB	VERB	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	5	acl:relcl	_	SpaceAfter=No
10	.	.	PUNCT	PUNCT	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 nmod	color:blue
1	Paiči	paiči	ADV	ADV	_	4	advmod	_	_
2	artistoi	artistu	NOUN	NOUN	Case=Par|Number=Plur	4	advcl	_	_
3	matkah	matka	NOUN	NOUN	Case=Ill|Number=Sing	4	obl	_	_
4	lähtiettih	lähtie	VERB	VERB	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	_
5	karjalazien	karjalaine	NOUN	NOUN	Case=Gen|Number=Plur	6	nmod:poss	_	_
6	heimovellet	heimovelli	NOUN	NOUN	Case=Nom|Number=Plur	4	nsubj	_	_
7	–	–	PUNCT	PUNCT	_	6	punct	_	_
8	Vepsän	Vepsä	NOUN	NOUN	Case=Gen|Number=Sing	9	nmod:poss	_	_
9	kul’tuuruseurah	kulʼtuuruseuru	NOUN	NOUN	Case=Ill|Number=Sing	10	nmod	_	_
10	kuulujat	kuului	ADJ	ADJ	Case=Acc|Number=Plur	6	parataxis	_	_
11	Larisa	Larisa	PROPN	PROPN	Case=Nom|Number=Sing	10	appos	_	_
12	Čirkova	Čirkov	PROPN	PROPN	Case=Nom|Number=Sing	11	flat:name	_	_
13	da	da	CCONJ	CCONJ	_	14	cc	_	_
14	Galina	Galina	PROPN	PROPN	Case=Nom|Number=Sing	11	conj	_	_
15	Lokkina	Lokkina	PROPN	PROPN	Case=Nom|Number=Sing	14	flat:name	_	SpaceAfter=No
16	.	.	PUNCT	PUNCT	_	10	punct	_	SpaceAfter=No

~~~



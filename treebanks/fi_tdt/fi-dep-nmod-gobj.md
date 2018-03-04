---
layout: base
title:  'Statistics of nmod:gobj in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `nmod:gobj`

This relation is a language-specific subtype of <tt><a href="fi-dep-nmod.html">nmod</a></tt>.
There are also 2 other language-specific subtypes of `nmod`: <tt><a href="fi-dep-nmod-gsubj.html">nmod:gsubj</a></tt>, <tt><a href="fi-dep-nmod-poss.html">nmod:poss</a></tt>.

1554 nodes (1%) are attached to their parents as `nmod:gobj`.

1554 instances of `nmod:gobj` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.38738738738739.

The following 8 pairs of parts of speech are connected with `nmod:gobj`: <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1412; 91% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (79; 5% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-PROPN.html">PROPN</a></tt> (54; 3% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (5; 0% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (1; 0% instances), <tt><a href="fi-pos-PUNCT.html">PUNCT</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (1; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 nmod:gobj	color:blue
1	Suurkiitokset	suur#kiitos	NOUN	N	Case=Nom|Number=Plur	0	root	_	_
2	niistä	se	PRON	Pron	Case=Ela|Number=Plur|PronType=Dem	1	nmod	_	_
3	ja	ja	CCONJ	C	_	5	cc	_	_
4	malliston	mallisto	NOUN	N	Case=Gen|Number=Sing	5	nmod:gobj	_	_
5	esittelystä	esittely	NOUN	N	Case=Ela|Derivation=U|Number=Sing	2	conj	1:nmod	_
6	H&M:lle	H&M	PROPN	N	Abbr=Yes|Case=All|Number=Sing	1	nmod	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 3 nmod:gobj	color:blue
1	Twitter-bannit	Twitter-banni	NOUN	N	Case=Nom|Number=Plur	0	root	_	_
2	ja	ja	CCONJ	C	_	4	cc	_	_
3	niiden	se	PRON	Pron	Case=Gen|Number=Plur|PronType=Dem	4	nmod:gobj	_	_
4	poistaminen	poistaminen	NOUN	N	Case=Nom|Derivation=Minen|Number=Sing	1	conj	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nmod:gobj	color:blue
1	Nissan	Nissan	PROPN	N	Case=Nom|Number=Sing	3	nmod:gobj	_	_
2	Leafin	Leaf	PROPN	N	Case=Gen|Number=Sing	1	flat:name	_	_
3	myynti	myynti	NOUN	N	Case=Nom|Number=Sing	8	nsubj	_	_
4	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	8	aux	_	_
5	näissä	tämä	PRON	Pron	Case=Ine|Number=Plur|PronType=Dem	6	det	_	_
6	maissa	maa	NOUN	N	Case=Ine|Number=Plur	8	obl	_	_
7	jo	jo	ADV	Adv	_	8	advmod	_	_
8	alkanut	alkaa	VERB	V	Case=Nom|Degree=Pos|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	SpaceAfter=No
9	.	.	PUNCT	Punct	_	8	punct	_	_

~~~



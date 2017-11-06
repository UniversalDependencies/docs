---
layout: base
title:  'Statistics of csubj:cop in UD_Finnish'
udver: '2'
---

## Treebank Statistics: UD_Finnish: Relations: `csubj:cop`

This relation is a language-specific subtype of <tt><a href="fi-dep-csubj.html">csubj</a></tt>.

204 nodes (0%) are attached to their parents as `csubj:cop`.

196 instances of `csubj:cop` (96%) are left-to-right (parent precedes child).
Average distance between parent and child is 3.52450980392157.

The following 14 pairs of parts of speech are connected with `csubj:cop`: <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (109; 53% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (64; 31% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (10; 5% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (4; 2% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (3; 1% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (2; 1% instances), <tt><a href="fi-pos-ADV.html">ADV</a></tt>-<tt><a href="fi-pos-VERB.html">VERB</a></tt> (2; 1% instances), <tt><a href="fi-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi-pos-ADV.html">ADV</a></tt> (1; 0% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi-pos-X.html">X</a></tt> (1; 0% instances), <tt><a href="fi-pos-PRON.html">PRON</a></tt>-<tt><a href="fi-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi-pos-VERB.html">VERB</a></tt>-<tt><a href="fi-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 7 csubj:cop	color:blue
1	On	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	3	cop	_	_
2	kyllä	kyllä	ADV	Adv	_	3	advmod	_	_
3	kiva	kiva	ADJ	A	Case=Nom|Degree=Pos|Number=Sing	0	root	_	SpaceAfter=No
4	,	,	PUNCT	Punct	_	7	punct	_	_
5	kun	kun	SCONJ	C	_	7	mark	_	_
6	tuolla	tuolla	ADV	Adv	_	7	advmod	_	_
7	sai	saada	VERB	V	Mood=Ind|Number=Sing|Person=0|Tense=Past|VerbForm=Fin|Voice=Act	3	csubj:cop	_	_
8	hipelöidä	hipelöidä	VERB	V	InfForm=1|Number=Sing|VerbForm=Inf|Voice=Act	7	xcomp	_	_
9	kaikkea	kaikki	PRON	Pron	Case=Par|Number=Sing|PronType=Ind	8	obj	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	3	punct	_	SpaceAfter=No
11	:)	:)	SYM	Symb	_	3	discourse	_	_

~~~


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 3 csubj:cop	color:blue
1	Miten	miten	ADV	Adv	_	3	advmod	_	_
2	se	se	PRON	Pron	Case=Nom|Number=Sing|PronType=Dem	3	obj	_	_
3	merkitään	merkitä	VERB	V	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	9	csubj:cop	_	_
4	pöytäkirjaan	pöytä#kirja	NOUN	N	Case=Ill|Number=Sing	3	obl	_	SpaceAfter=No
5	,	,	PUNCT	Punct	_	3	punct	_	_
6	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	9	cop	_	_
7	parlamentin	parlamentti	NOUN	N	Case=Gen|Number=Sing	8	nmod:poss	_	_
8	hallinnon	hallinto	NOUN	N	Case=Gen|Number=Sing	9	nmod:poss	_	_
9	asia	asia	NOUN	N	Case=Nom|Number=Sing	0	root	_	SpaceAfter=No
10	.	.	PUNCT	Punct	_	9	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 6 csubj:cop	color:blue
1	On	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	_
2	selvää	selvä	ADJ	A	Case=Par|Degree=Pos|Number=Sing	0	root	_	_
3	että	että	SCONJ	C	_	6	mark	_	_
4	toimistobiosfääri	toimisto#bio#sfääri	NOUN	N	Case=Nom|Number=Sing	6	nsubj:cop	_	_
5	on	olla	AUX	V	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
6	muutostilassa	muutos#tila	NOUN	N	Case=Ine|Number=Sing	2	csubj:cop	_	SpaceAfter=No
7	.	.	PUNCT	Punct	_	2	punct	_	_

~~~



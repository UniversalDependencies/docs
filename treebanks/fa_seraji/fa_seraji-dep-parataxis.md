---
layout: base
title:  'Statistics of parataxis in UD_Persian-Seraji'
udver: '2'
---

## Treebank Statistics: UD_Persian-Seraji: Relations: `parataxis`

This relation is universal.

208 nodes (0%) are attached to their parents as `parataxis`.

191 instances of `parataxis` (92%) are left-to-right (parent precedes child).
Average distance between parent and child is 5.19711538461539.

The following 15 pairs of parts of speech are connected with `parataxis`: <tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt> (89; 43% instances), <tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt> (52; 25% instances), <tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt> (17; 8% instances), <tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa_seraji-pos-ADJ.html">ADJ</a></tt> (11; 5% instances), <tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa_seraji-pos-ADV.html">ADV</a></tt> (11; 5% instances), <tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa_seraji-pos-INTJ.html">INTJ</a></tt> (9; 4% instances), <tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt> (6; 3% instances), <tt><a href="fa_seraji-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt> (3; 1% instances), <tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa_seraji-pos-CCONJ.html">CCONJ</a></tt> (3; 1% instances), <tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_seraji-pos-INTJ.html">INTJ</a></tt> (2; 1% instances), <tt><a href="fa_seraji-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fa_seraji-pos-ADV.html">ADV</a></tt>-<tt><a href="fa_seraji-pos-INTJ.html">INTJ</a></tt> (1; 0% instances), <tt><a href="fa_seraji-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fa_seraji-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fa_seraji-pos-DET.html">DET</a></tt> (1; 0% instances), <tt><a href="fa_seraji-pos-VERB.html">VERB</a></tt>-<tt><a href="fa_seraji-pos-PRON.html">PRON</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 3 parataxis	color:blue
1	لندن	لندن	NOUN	N_SING	Number=Sing	0	root	_	_
2	-	-	PUNCT	DELM	_	3	punct	_	_
3	ایرنا	ایرنا	NOUN	N_SING	Number=Sing	1	parataxis	_	SpaceAfter=No
4	:	:	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 5 parataxis	color:blue
1	مادر	مادر	NOUN	N_SING	Number=Sing	0	root	_	SpaceAfter=No
2	:	:	PUNCT	DELM	_	3	punct	_	_
3	احمد	احمد	NOUN	N_SING	Number=Sing	1	vocative	_	_
4	پا	پا	NOUN	N_SING	Number=Sing	5	compound:lvc	_	_
5	شو	_	VERB	V_IMP	Mood=Imp|Number=Sing|Person=2	1	parataxis	_	SpaceAfter=No
6	،	،	PUNCT	DELM	_	9	punct	_	_
7	مدرسه	مدرسه	NOUN	N_SING	Number=Sing	9	nsubj	_	_
8	ات	تو	PRON	PRO	Number=Sing|Person=2|PronType=Prs	7	nmod:poss	_	_
9	دیر	دیر	ADV	ADV	_	1	parataxis	_	_
10	شد	کرد#کن	AUX	V_PA	Number=Sing|Person=3|Tense=Past	9	cop	_	SpaceAfter=No
11	.	.	PUNCT	DELM	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 1 parataxis	color:blue
1	مادر	مادر	NOUN	N_SING	Number=Sing	4	parataxis	_	SpaceAfter=No
2	!	!	PUNCT	DELM	_	1	punct	_	_
3	پا	پا	NOUN	N_SING	Number=Sing	4	compound:lvc	_	_
4	شو	_	VERB	V_IMP	Mood=Imp|Number=Sing|Person=2	0	root	_	SpaceAfter=No
5	!	!	PUNCT	DELM	_	4	punct	_	_

~~~



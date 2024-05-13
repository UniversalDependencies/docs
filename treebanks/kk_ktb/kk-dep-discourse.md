---
layout: base
title:  'Statistics of discourse in UD_Kazakh'
udver: '2'
---

## Treebank Statistics: UD_Kazakh: Relations: `discourse`

This relation is universal.

60 nodes (1%) are attached to their parents as `discourse`.

39 instances of `discourse` (65%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.03333333333333.

The following 15 pairs of parts of speech are connected with `discourse`: <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-PART.html">PART</a></tt> (18; 30% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-PART.html">PART</a></tt> (11; 18% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-INTJ.html">INTJ</a></tt> (7; 12% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-INTJ.html">INTJ</a></tt> (7; 12% instances), <tt><a href="kk-pos-PROPN.html">PROPN</a></tt>-<tt><a href="kk-pos-PART.html">PART</a></tt> (5; 8% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-INTJ.html">INTJ</a></tt> (2; 3% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-ADV.html">ADV</a></tt> (2; 3% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="kk-pos-ADJ.html">ADJ</a></tt>-<tt><a href="kk-pos-PRON.html">PRON</a></tt> (1; 2% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-ADV.html">ADV</a></tt> (1; 2% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-AUX.html">AUX</a></tt> (1; 2% instances), <tt><a href="kk-pos-NOUN.html">NOUN</a></tt>-<tt><a href="kk-pos-PART.html">PART</a></tt> (1; 2% instances), <tt><a href="kk-pos-NUM.html">NUM</a></tt>-<tt><a href="kk-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="kk-pos-PRON.html">PRON</a></tt>-<tt><a href="kk-pos-INTJ.html">INTJ</a></tt> (1; 2% instances), <tt><a href="kk-pos-VERB.html">VERB</a></tt>-<tt><a href="kk-pos-VERB.html">VERB</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 discourse	color:blue
1	"	"	PUNCT	sent	_	4	punct	_	SpaceAfter=No
2	Оны	ол	PRON	prn	Case=Acc|Number=Sing|Person=3|PronType=Prs	4	obj	_	_
3	біз	біз	PRON	prn	Case=Nom|Number=Plur|Person=1|PronType=Prs	4	nsubj	_	_
4	біл	біл	VERB	v	Mood=Ind|Number=Plur|Person=1|Polarity=Neg|Tense=Aor|VerbForm=Fin	8	ccomp	_	_
5	ау	ау	PART	mod_emo	_	4	discourse	_	_
6	!	!	PUNCT	sent	_	4	punct	_	SpaceAfter=No
7	"	"	PUNCT	sent	_	4	punct	_	_
8	деген	де	VERB	v	Tense=Past|VerbForm=Part	9	acl:relcl	_	_
9	ойлар	ой	NOUN	n	Case=Nom|Number=Plur	10	nsubj	_	_
10	келді	кел	VERB	v	Mood=Ind|Number=Plur|Person=3|Tense=Past|VerbForm=Fin	0	root	_	SpaceAfter=No
11	.	.	PUNCT	sent	_	10	punct	_	_

~~~


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 discourse	color:blue
1	Осында	осы	PRON	prn	Case=Loc|PronType=Dem	6	advmod	_	_
2	орыс	орыс	NOUN	n	Case=Nom	3	nmod:poss	_	_
3	тілінде	тіл	NOUN	n	Case=Loc|Number[psor]=Plur,Sing|Person[psor]=3	4	obl	_	_
4	сөйлейтін	сөйле	VERB	v	Aspect=Imp|VerbForm=Part	5	acl	_	_
5	адам	адам	NOUN	n	Case=Nom	6	nsubj	_	_
6	бар	бар	ADJ	adj	_	0	root	_	_
7	ма	ма	PART	qst	_	6	discourse	_	_
8	?	?	PUNCT	sent	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 1 discourse	color:blue
1	Міне	міне	INTJ	ij	_	6	discourse	_	SpaceAfter=No
2	,	,	PUNCT	cm	_	6	punct	_	_
3	сонда	сол	PRON	prn	Case=Loc|PronType=Dem	6	obl	_	_
4	ғана	ғана	ADV	postadv	_	3	advmod	_	_
5	ол	ол	PRON	prn	Case=Nom|PronType=Dem	6	nsubj	_	_
6	тұрақты	тұрақты	ADJ	adj	_	0	root	_	_
7	болады	бол	AUX	v	Mood=Ind|Number=Sing|Person=3|Tense=Aor|VerbForm=Fin	6	cop	_	SpaceAfter=No
8	.	.	PUNCT	sent	_	6	punct	_	_

~~~



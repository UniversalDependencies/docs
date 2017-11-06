---
layout: base
title:  'Statistics of advmod:emph in UD_Turkish-PUD'
udver: '2'
---

## Treebank Statistics: UD_Turkish-PUD: Relations: `advmod:emph`

This relation is a language-specific subtype of <tt><a href="tr_pud-dep-advmod.html">advmod</a></tt>.

145 nodes (1%) are attached to their parents as `advmod:emph`.

141 instances of `advmod:emph` (97%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.24137931034483.

The following 13 pairs of parts of speech are connected with `advmod:emph`: <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (61; 42% instances), <tt><a href="tr_pud-pos-ADV.html">ADV</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (21; 14% instances), <tt><a href="tr_pud-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (15; 10% instances), <tt><a href="tr_pud-pos-PRON.html">PRON</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (15; 10% instances), <tt><a href="tr_pud-pos-PROPN.html">PROPN</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (10; 7% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (7; 5% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-ADV.html">ADV</a></tt> (4; 3% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (4; 3% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (3; 2% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-SCONJ.html">SCONJ</a></tt> (2; 1% instances), <tt><a href="tr_pud-pos-ADJ.html">ADJ</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-NOUN.html">NOUN</a></tt>-<tt><a href="tr_pud-pos-VERB.html">VERB</a></tt> (1; 1% instances), <tt><a href="tr_pud-pos-VERB.html">VERB</a></tt>-<tt><a href="tr_pud-pos-AUX.html">AUX</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 11 advmod:emph	color:blue
1	Oyun	_	NOUN	NN	Number=Sing	2	compound	_	_
2	tarzında	_	NOUN	NN	Case=Loc|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	advmod	_	_
3	sert	_	ADJ	JJ	Number=Sing	5	amod	_	_
4	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	5	det	_	_
5	yan	_	NOUN	NN	Case=Nom|Number=Sing	6	nsubj	_	_
6	olsa	_	VERB	VB	Mood=Cnd|Number=Sing|Person=3|Tense=Pres	12	advcl	_	_
7	da	_	ADV	RB	_	6	advmod:emph	_	_
8	yumuşak	_	ADJ	JJ	Number=Sing	10	amod	_	_
9	bir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Pos	10	det	_	_
10	tutuşu	_	NOUN	VN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3|Polarity=Pos	12	csubj	_	_
11	da	_	ADV	RB	_	10	advmod:emph	_	_
12	var	_	ADJ	JJ	Polarity=Pos	0	root	_	SpaceAfter=No
13	.	_	PUNCT	.	_	12	punct	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 advmod:emph	color:blue
1	Belki	_	ADV	RB	_	6	advmod	_	_
2	de	_	ADV	RB	_	1	advmod:emph	_	_
3	kıyafet	_	NOUN	NN	Number=Sing	4	compound	_	_
4	yönetmeliği	_	NOUN	VN	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=3	6	csubj	_	_
5	çok	_	ADV	RB	_	6	advmod	_	_
6	sıkıcı	_	NOUN	VN	Number=Sing	0	root	_	_
7	ydı	_	AUX	AUX	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past	6	cop	_	_
8	.	_	PUNCT	.	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 advmod:emph	color:blue
1	Ancak	_	ADV	RB	_	12	advmod	_	_
2	onda	_	PRON	PRP	Case=Loc|Number=Sing	12	advmod	_	_
3	ya	_	CCONJ	CCONJ	_	7	cc	_	_
4	da	_	ADV	RB	_	3	advmod:emph	_	_
5	başkalarına	_	NOUN	NN	Case=Dat|Number=Plur	7	nmod	_	_
6	karşı	_	ADP	IN	_	5	case	_	_
7	davranışlarında	_	NOUN	NN	Case=Loc|Number=Plur|Number[psor]=Sing|Person[psor]=3	2	conj	_	_
8	sanatsal	_	ADJ	JJ	Number=Sing	11	amod	_	_
9	başka	_	ADJ	JJ	Number=Sing	11	amod	_	_
10	hiçbir	_	DET	DT	Definite=Ind|Number=Sing|Polarity=Neg	11	det	_	_
11	şey	_	PRON	PRI	Case=Nom|Number=Sing	12	nsubj	_	_
12	yok	_	ADJ	JJ	Polarity=Neg	0	root	_	_
13	tu	_	AUX	AUX	Aspect=Perf|Mood=Gen|Number=Sing|Person=3|Tense=Pres	12	cop	_	_
14	.	_	PUNCT	.	_	12	punct	_	_

~~~



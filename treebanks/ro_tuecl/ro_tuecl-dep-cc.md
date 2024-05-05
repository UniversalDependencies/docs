---
layout: base
title:  'Statistics of cc in UD_Romanian-TueCL'
udver: '2'
---

## Treebank Statistics: UD_Romanian-TueCL: Relations: `cc`

This relation is universal.
There are 1 language-specific subtypes of `cc`: <tt><a href="ro_tuecl-dep-cc-preconj.html">cc:preconj</a></tt>.

122 nodes (3%) are attached to their parents as `cc`.

119 instances of `cc` (98%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.27049180327869.

The following 9 pairs of parts of speech are connected with `cc`: <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-CCONJ.html">CCONJ</a></tt> (51; 42% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-CCONJ.html">CCONJ</a></tt> (44; 36% instances), <tt><a href="ro_tuecl-pos-ADJ.html">ADJ</a></tt>-<tt><a href="ro_tuecl-pos-CCONJ.html">CCONJ</a></tt> (15; 12% instances), <tt><a href="ro_tuecl-pos-VERB.html">VERB</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (5; 4% instances), <tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt>-<tt><a href="ro_tuecl-pos-CCONJ.html">CCONJ</a></tt> (2; 2% instances), <tt><a href="ro_tuecl-pos-NOUN.html">NOUN</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (2; 2% instances), <tt><a href="ro_tuecl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_tuecl-pos-ADV.html">ADV</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-INTJ.html">INTJ</a></tt>-<tt><a href="ro_tuecl-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances), <tt><a href="ro_tuecl-pos-PROPN.html">PROPN</a></tt>-<tt><a href="ro_tuecl-pos-CCONJ.html">CCONJ</a></tt> (1; 1% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 7 cc	color:blue
1	știu	ști	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	_
2	că	că	SCONJ	_	Polarity=Pos	3	mark	_	_
3	ieși	ieși	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	1	ccomp	_	_
4	bine	bine	ADV	_	Degree=Pos	3	advmod	_	_
5	în	în	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
6	poze	poză	NOUN	_	Definite=Ind|Gender=Fem|Number=Plur	3	obl	_	_
7	dar	dar	CCONJ	_	Polarity=Pos	10	cc	_	_
8	mai	mai	ADV	_	_	9	advmod	_	_
9	bine	bine	ADV	_	Degree=Pos	10	advmod	_	_
10	ieși	ieși	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	1	conj	_	_
11	cu	cu	ADP	_	AdpType=Prep|Case=Acc	12	case	_	_
12	mine	eu	PRON	_	Case=Acc|Number=Sing|Person=1|PronType=Prs|Strength=Strong	10	obl	_	_

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 4 cc	color:blue
1	Felul	fel	NOUN	_	Case=Nom|Definite=Def|Gender=Masc|Number=Sing	0	root	_	_
2	întâi	întâi	NUM	_	Number=Sing|NumForm=Word|NumType=Ord	3	nummod	_	_
3	sarmale	sarma	NOUN	_	Case=Nom|Definite=Def|Gender=Fem|Number=Plur	1	nmod	_	_
4	iar	iar	CCONJ	_	_	6	cc	_	_
5	la	la	ADP	_	AdpType=Prep|Case=Acc	6	case	_	_
6	desert	desert	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	1	conj	_	_
7	buzele	buză	NOUN	_	Case=Acc|Definite=Def|Gender=Fem|Number=Plur	6	nmod	_	_
8	tale	tău	PRON	_	Gender=Fem|Number=Plur|Number[psor]=Sing|Person=1|Poss=Yes|PronType=Prs	7	det	_	SpaceAfter=No
9	.	.	PUNCT	_	_	1	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 6 cc	color:blue
1	Pui	pune	VERB	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	0	root	_	_
2	poza	poză	NOUN	_	Case=Acc,Nom|Definite=Def|Gender=Fem|Number=Sing	1	obj	_	_
3	machiată	machiat	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	2	amod	_	_
4	cu	cu	ADP	_	AdpType=Prep|Case=Acc	5	case	_	_
5	filtru	filtru	NOUN	_	Definite=Ind|Gender=Masc|Number=Sing	1	obl	_	_
6	și	și	CCONJ	_	Polarity=Pos	8	cc	_	_
7	tot	tot	ADV	_	_	8	advmod	_	_
8	urâtă	urâtă	ADJ	_	Case=Acc,Nom|Definite=Ind|Degree=Pos|Gender=Fem|Number=Sing	1	conj	_	_
9	ești	fi	AUX	_	Mood=Ind|Number=Sing|Person=2|Tense=Pres|VerbForm=Fin	8	cop	_	_

~~~



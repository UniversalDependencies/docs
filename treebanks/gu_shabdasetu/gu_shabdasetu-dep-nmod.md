---
layout: base
title:  'Statistics of nmod in UD_Gujarati-ShabdaSetu'
udver: '2'
---

## Treebank Statistics: UD_Gujarati-ShabdaSetu: Relations: `nmod`

This relation is universal.
There are 1 language-specific subtypes of `nmod`: <tt><a href="gu_shabdasetu-dep-nmod-poss.html">nmod:poss</a></tt>.

7 nodes (2%) are attached to their parents as `nmod`.

7 instances of `nmod` (100%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.14285714285714.

The following 5 pairs of parts of speech are connected with `nmod`: <tt><a href="gu_shabdasetu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gu_shabdasetu-pos-NOUN.html">NOUN</a></tt> (3; 43% instances), <tt><a href="gu_shabdasetu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gu_shabdasetu-pos-PRON.html">PRON</a></tt> (1; 14% instances), <tt><a href="gu_shabdasetu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="gu_shabdasetu-pos-VERB.html">VERB</a></tt> (1; 14% instances), <tt><a href="gu_shabdasetu-pos-PRON.html">PRON</a></tt>-<tt><a href="gu_shabdasetu-pos-NOUN.html">NOUN</a></tt> (1; 14% instances), <tt><a href="gu_shabdasetu-pos-VERB.html">VERB</a></tt>-<tt><a href="gu_shabdasetu-pos-NOUN.html">NOUN</a></tt> (1; 14% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nmod	color:blue
1	એક	એક	DET	_	PronType=Ind	3	det	_	Gloss=one|GuGloss=એક
2	વખત	વખત	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	4	nmod	_	Gloss=time|GuGloss=વખત
3	એક	એક	DET	_	PronType=Ind	4	det	_	Gloss=one|GuGloss=એક
4	હાથી	હાથી	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	5	nsubj	_	Gloss=elephant|GuGloss=હાથી
5	હતો	હતું	AUX	_	Gender=Masc|Mood=Ind|Number=Sing|Tense=Past	0	root	_	Gloss=was|GuGloss=હતો
6	અને	અને	CCONJ	_	_	10	cc	_	Gloss=and|GuGloss=અને
7	એક	એક	DET	_	PronType=Prs	9	det	_	Gloss=one|GuGloss=એક
8	નાનું	નાનું	ADJ	_	_	9	amod	_	Gloss=small|GuGloss=નાનું
9	મચ્છર	મચ્છર	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	10	nsubj	_	Gloss=mosquito|GuGloss=મચ્છર
10	હતું	હતું	AUX	_	Gender=Neut|Mood=Ind|Number=Sing|Tense=Past	5	advcl	_	Gloss=be-had|GuGloss=હતું
11	.	.	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 12	bgColor:blue
# visual-style 12	fgColor:white
# visual-style 14	bgColor:blue
# visual-style 14	fgColor:white
# visual-style 14 12 nmod	color:blue
1	જ્યાં	જ્યાં	ADV	_	_	3	advmod	_	Gloss=where|GuGloss=જ્યાં
2	હું	હું	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	3	nsubj	_	Gloss=i.nom|GuGloss=હું
3	રહું	રહેવું	VERB	_	Aspect=Hab|Gender=Masc|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	16	advcl	_	Gloss=live-prs|GuGloss=રહું
4	છું	છે	AUX	_	_	3	aux	_	Gloss=be.prs|GuGloss=છું
5	અને	અને	CCONJ	_	_	9	cc	_	Gloss=and|GuGloss=અને
6	જ્યાં	જ્યાં	ADV	_	_	9	advmod	_	Gloss=where|GuGloss=જ્યાં
7	હું	હું	PRON	_	Case=Nom|Number=Sing|Person=1|PronType=Prs	9	nsubj	_	Gloss=i.nom|GuGloss=હું
8	કામ	કામ	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	9	obj	_	Gloss=work-prs|GuGloss=કામ
9	કરું	કરવું	VERB	_	Aspect=Hab|Gender=Masc|Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	3	conj	_	Gloss=be.prs|GuGloss=કરું
10	છું	છે	AUX	_	Gender=Neut|Number=Sing	9	aux	_	Gloss=being-|GuGloss=છું
11	,	,	PUNCT	_	_	9	punct	_	_
12	તેમાં	તેમાં	PRON	_	Case=Loc|Number=Sing|PronType=Dem	14	nmod	_	Gloss=there-loc|GuGloss=તેમાં
13	બે	બે	NUM	_	_	14	nummod	_	Gloss=two|GuGloss=બે
14	કિલોમીટરનો	કિલોમીટરનો	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	15	nmod	_	Gloss=kilometer-gen|GuGloss=કિલોમીટરનો
15	અંતર	અંતર	NOUN	_	Case=Nom|Gender=Masc|Number=Sing	16	nsubj	_	Gloss=distance|GuGloss=અંતર
16	છે	છે	AUX	_	_	0	root	_	Gloss=Gloss=be.prs
17	.	.	PUNCT	_	_	16	punct	_	_

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 9 8 nmod	color:blue
1	હું	હું	PRON	_	Number=Sing|Person=1|PronType=Prs	10	nsubj	_	Gloss=i|GuGloss=હું
2	મારા	હું	PRON	_	Number=Plur|Person=1|PronType=Prs	3	nmod:poss	_	Gloss=my|GuGloss=મારા
3	દેશ	દેશ	NOUN	_	Case=Acc|Gender=Masc|Number=Sing	10	obl	_	Gloss=country|GuGloss=દેશ
4	અને	અને	CCONJ	_	_	5	cc	_	Gloss=and|GuGloss=અને
5	દેશબાંધવો	દેશબાંધવ	NOUN	_	Case=Acc|Gender=Masc|Number=Plur	3	conj	_	Gloss=countrymen|GuGloss=દેશબાંધવો
6	પ્રત્યે	પ્રત્યે	ADP	_	_	3	case	_	Gloss=for|GuGloss=પ્રત્યે
7	વફાદારી	વફાદારી	NOUN	_	Case=Acc|Gender=Fem|Number=Sing	8	obj	_	Gloss=fidelity|GuGloss=વફાદારી
8	રાખવાની	રાખવું	VERB	_	VerbForm=Inf	9	nmod	_	Gloss=keep+conn.part|GuGloss=રાખવાની
9	પ્રતિજ્ઞા	પ્રતિજ્ઞા	NOUN	_	Case=Nom|Gender=Fem|Number=Sing	10	obj	_	Gloss=pledge|GuGloss=પ્રતિજ્ઞા
10	લઉં	લેવું	VERB	_	Mood=Ind|Number=Sing|Person=1|Tense=Pres|VerbForm=Fin	0	root	_	Gloss=taking|GuGloss=લઉં
11	છું	છે	AUX	_	_	10	aux	_	Gloss=am|GuGloss=છું
12	.	.	PUNCT	_	_	10	punct	_	_

~~~



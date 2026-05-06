---
layout: base
title:  'Statistics of obl in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `obl`

This relation is universal.
There are 1 language-specific subtypes of `obl`: <tt><a href="fi_ftb-dep-obl-agent.html">obl:agent</a></tt>.

14373 nodes (9%) are attached to their parents as `obl`.

9242 instances of `obl` (64%) are left-to-right (parent precedes child).
Average distance between parent and child is 2.21303833576845.

The following 21 pairs of parts of speech are connected with `obl`: <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (10206; 71% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (1968; 14% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (1159; 8% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (704; 5% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (249; 2% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (23; 0% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (13; 0% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (12; 0% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (11; 0% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (6; 0% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-ADP.html">ADP</a></tt> (4; 0% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-ADV.html">ADV</a></tt> (4; 0% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt> (4; 0% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt> (2; 0% instances), <tt><a href="fi_ftb-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt> (1; 0% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 5 obl	color:blue
1	ei	ei	AUX	V,Neg,Act,Sg3	Mood=Ind|Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	2	aux	_	_
2	ole	olla	VERB	V,Act,Ind,Pres,ConNeg	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	ennää	enää	ADV	Adv	Style=Coll	2	advmod	_	_
4	kymmenhiv	kymmenen	NUM	Num,Card,Pl,Ill	Case=Ill|Number=Plur|NumType=Card|Style=Coll	5	nummod	_	_
5	vuossin	vuosi	NOUN	N,Pl,Ill	Case=Ill|Number=Plur|Style=Coll	2	obl	_	_

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 obl	color:blue
1	mitäs	mikä	PRON	Pron,Interr,Par,S	Case=Par|Clitic=S|PronType=Int	3	obl	_	Was18=advmod
2	se	se	PRON	Pron,Dem,Sg,Nom	Case=Nom|Number=Sing|PronType=Dem	3	nsubj	_	_
3	kiäns	kääntää	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Style=Coll|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
4	viäräle	väärä	ADJ	A,Sg,All	Case=All|Number=Sing|Style=Coll	5	amod	_	_
5	kaistale	kaista	NOUN	N,Sg,All	Case=All|Number=Sing|Style=Coll	3	obl	_	_

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 1 2 obl	color:blue
1	Ihastuin	ihastua	VERB	V,Act,Ind,Past,Sg1	Mood=Ind|Number=Sing|Person=1|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
2	Anneliin	anneli	PROPN	N,Prop,Sg,Ill	Case=Ill|Number=Sing	1	obl	_	_
3	puistossa	puisto	NOUN	N,Sg,Ine	Case=Ine|Number=Sing	1	obl	_	_
4	viime	viime	ADJ	A	_	5	amod	_	_
5	lauantaina	lauantai	NOUN	N,Sg,Ess	Case=Ess|Number=Sing	1	obl	_	_
6	.	.	PUNCT	Pun	_	5	punct	_	_

~~~



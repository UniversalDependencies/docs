---
layout: base
title:  'Statistics of punct in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `punct`

This relation is universal.

22565 nodes (14%) are attached to their parents as `punct`.

22224 instances of `punct` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.14110347883891.

The following 16 pairs of parts of speech are connected with `punct`: <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (10654; 47% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (4764; 21% instances), <tt><a href="fi_ftb-pos-ADV.html">ADV</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (2061; 9% instances), <tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (1837; 8% instances), <tt><a href="fi_ftb-pos-PRON.html">PRON</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (1227; 5% instances), <tt><a href="fi_ftb-pos-PROPN.html">PROPN</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (1003; 4% instances), <tt><a href="fi_ftb-pos-PART.html">PART</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (331; 1% instances), <tt><a href="fi_ftb-pos-NUM.html">NUM</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (316; 1% instances), <tt><a href="fi_ftb-pos-INTJ.html">INTJ</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (99; 0% instances), <tt><a href="fi_ftb-pos-CCONJ.html">CCONJ</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (88; 0% instances), <tt><a href="fi_ftb-pos-SCONJ.html">SCONJ</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (83; 0% instances), <tt><a href="fi_ftb-pos-X.html">X</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (52; 0% instances), <tt><a href="fi_ftb-pos-DET.html">DET</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (27; 0% instances), <tt><a href="fi_ftb-pos-AUX.html">AUX</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (13; 0% instances), <tt><a href="fi_ftb-pos-ADP.html">ADP</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (6; 0% instances), <tt><a href="fi_ftb-pos-SYM.html">SYM</a></tt>-<tt><a href="fi_ftb-pos-PUNCT.html">PUNCT</a></tt> (4; 0% instances).


~~~ conllu
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 6 7 punct	color:blue
1	noo	noo	INTJ	Pcle,Interj	_	6	discourse	_	Alt=6_discourse
2	ne	ne	PRON	Pron,Dem,Pl,Nom	Case=Nom|Number=Plur|PronType=Dem	6	nsubj:cop	_	_
3	o	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Style=Coll|Tense=Pres|VerbForm=Fin|Voice=Act	6	cop	_	_
4	jottais	jokin	DET	Pron,Qnt,Sg,Par	Case=Par|Number=Sing|PronType=Ind|Style=Coll	6	det	_	_
5	semssi	semmoinen	DET	A,Dem,Pl,Par	Case=Par|Number=Plur|PronType=Dem|Style=Coll	6	amod	_	Alt=DET
6	sukulaissi	sukulainen	NOUN	N,Pl,Par	Case=Par|Number=Plur|Style=Coll	0	root	_	_
7	.	.	PUNCT	Pun	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 6 punct	color:blue
1	Alta	alta	ADV	Adv	_	2	advmod	_	_
2	mennään	mennä	VERB	V,Pass,Ind,Pres	Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	_
3	vaikka	vaikka	SCONJ	Pcle,CS	_	5	mark	_	_
4	niskat	niska	NOUN	N,Pl,Nom	Case=Nom|Number=Plur	5	nsubj	_	_
5	katkeis	katketa	VERB	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|Style=Coll|VerbForm=Fin|Voice=Act	2	advcl	_	_
6	.	.	PUNCT	Pun	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 5 punct	color:blue
1	Joku	joku	PRON	Pron,Qnt,Sg,Nom	Case=Nom|Number=Sing|PronType=Ind	2	nsubj	_	FTB-PronType=Qnt
2	makasi	maata	VERB	V,Act,Ind,Past,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	_
3	maassa	maa	NOUN	N,Sg,Ine	Case=Ine|Number=Sing	2	nmod	_	_
4	rähmällään	rähmällään	ADV	Adv,Px3	Person[psor]=3	2	advmod	_	_
5	.	.	PUNCT	Pun	_	4	punct	_	_

~~~



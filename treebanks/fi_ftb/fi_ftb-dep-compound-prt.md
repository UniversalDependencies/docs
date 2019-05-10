---
layout: base
title:  'Statistics of compound:prt in UD_Finnish-FTB'
udver: '2'
---

## Treebank Statistics: UD_Finnish-FTB: Relations: `compound:prt`

This relation is a language-specific subtype of <tt><a href="fi_ftb-dep-compound.html">compound</a></tt>.
There are also 1 other language-specific subtypes of `compound`: <tt><a href="fi_ftb-dep-compound-nn.html">compound:nn</a></tt>.

380 nodes (0%) are attached to their parents as `compound:prt`.

355 instances of `compound:prt` (93%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.66842105263158.

The following 5 pairs of parts of speech are connected with `compound:prt`: <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-ADV.html">ADV</a></tt> (191; 50% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (178; 47% instances), <tt><a href="fi_ftb-pos-VERB.html">VERB</a></tt>-<tt><a href="fi_ftb-pos-ADJ.html">ADJ</a></tt> (7; 2% instances), <tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt>-<tt><a href="fi_ftb-pos-NOUN.html">NOUN</a></tt> (3; 1% instances), <tt><a href="fi_ftb-pos-X.html">X</a></tt>-<tt><a href="fi_ftb-pos-X.html">X</a></tt> (1; 0% instances).


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 9 compound:prt	color:blue
1	"	"	PUNCT	Pun,Quo,Ini	PunctSide=Ini	2	punct	_	Missed-SUBCAT=QUOTATION
2	Istuu	istua	VERB	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	0	root	_	_
3	kymmenen	kymmenen	NUM	Num,Card,Sg,Nom	Case=Nom|Number=Sing|NumType=Card	4	nummod	_	_
4	vuotta	vuosi	NOUN	N,Sg,Par	Case=Par|Number=Sing	2	nmod	_	_
5	pytyssä	pytty	NOUN	N,Sg,Ine	Case=Ine|Number=Sing	2	nmod	_	_
6	ell	jos	SCONJ	Pcle,CS	_	8	mark	_	Join=Yes
7	ei	ei	AUX	V,Neg,Act,Sg3	Number=Sing|Person=3|Polarity=Neg|VerbForm=Fin|Voice=Act	8	aux	_	_
8	anna	antaa	VERB	V,Act,Ind,Pres,ConNeg	Connegative=Yes|Mood=Ind|Tense=Pres|VerbForm=Fin|Voice=Act	2	advcl	_	_
9	ilmi	ilmi	ADV	Adv	_	8	compound:prt	_	_
10	kavereitaan	kaveri	NOUN	N,Pl,Par,Px3	Case=Par|Number=Plur|Person[psor]=3	8	obj	_	_
11	.	.	PUNCT	Pun	_	10	punct	_	_
12	"	"	PUNCT	Pun,Quo,Fin	PunctSide=Fin	10	punct	_	Missed-SUBCAT=QUOTATION|Was18punch=punct:11

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 compound:prt	color:blue
1	Mieleni	mieli	NOUN	N,Sg,Nom,PxSg1	Case=Nom|Number=Sing|Number[psor]=Sing|Person[psor]=1	3	compound:prt	_	_
2	olisi	olla	AUX	V,Act,Cond,Sg3	Mood=Cnd|Number=Sing|Person=3|VerbForm=Fin|Voice=Act	3	aux	_	_
3	tehnyt	tehdä	VERB	V,Act,PcpNut,Sg,Nom	Case=Nom|Number=Sing|PartForm=Past|VerbForm=Part|Voice=Act	0	root	_	_
4	rynnätä	rynnätä	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	3	xcomp	_	Alt=3_xcomp
5	pois	pois	ADV	Adv	_	4	advmod	_	_
6	koko	koko	ADJ	A	_	7	amod	_	_
7	salista	sali	NOUN	N,Sg,Ela	Case=Ela|Number=Sing	4	nmod	_	_

~~~


~~~ conllu
# visual-style 6	bgColor:blue
# visual-style 6	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 6 compound:prt	color:blue
1	On	olla	AUX	V,Act,Ind,Pres,Sg3	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	2	cop	_	Alt=2_cop
2	hyvä	hyvä	ADJ	A,Sg,Nom	Case=Nom|Number=Sing	0	root	_	Alt=0_root|FTB-Rel=modal
3	ottaa	ottaa	VERB	V,Act,InfA,Lat	Case=Lat|InfForm=1|VerbForm=Inf|Voice=Act	2	xcomp:ds	_	Alt=2_xcomp:ds
4	edeltä	edeltä	ADV	Adv	_	3	advmod	_	_
5	käsin	käsin	ADP	Adp	_	4	case	_	_
6	selvää	selvä	ADJ	A,Sg,Par	Case=Par|Number=Sing	3	compound:prt	_	_
7	kustannuksista	kustannus	NOUN	N,Pl,Ela	Case=Ela|Number=Plur	3	nmod	_	_

~~~



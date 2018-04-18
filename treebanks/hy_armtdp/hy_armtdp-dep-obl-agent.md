---
layout: base
title:  'Statistics of obl:agent in UD_Armenian-ArmTDP'
udver: '2'
---

## Treebank Statistics: UD_Armenian-ArmTDP: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="hy_armtdp-dep-obl.html">obl</a></tt>.

12 nodes (0%) are attached to their parents as `obl:agent`.

10 instances of `obl:agent` (83%) are right-to-left (child precedes parent).
Average distance between parent and child is 1.83333333333333.

The following 3 pairs of parts of speech are connected with `obl:agent`: <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-NOUN.html">NOUN</a></tt> (10; 83% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PRON.html">PRON</a></tt> (1; 8% instances), <tt><a href="hy_armtdp-pos-VERB.html">VERB</a></tt>-<tt><a href="hy_armtdp-pos-PROPN.html">PROPN</a></tt> (1; 8% instances).


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 4 obl:agent	color:blue
1	2016	2016	NUM	_	NumForm=Digit|NumType=Card	2	nummod	_	_
2	թվականին	թվական	NOUN	_	Animacy=Inan|Case=Dat|Definite=Def|Number=Sing	5	obl	_	_
3	ազգային	ազգային	ADJ	_	Degree=Pos	4	amod	_	_
4	հայտատուներից	հայտատու	NOUN	_	Animacy=Hum|Case=Abl|Definite=Ind|Number=Plur	5	obl:agent	_	_
5	ստացվել	ստանալ	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	_
6	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	5	aux	_	_
7	1261	1261	NUM	_	NumForm=Digit|NumType=Card	8	nummod	_	_
8	հայտ	հայտ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Ind|Number=Sing	5	nsubj:pass	_	SpaceAfter=No
9	,	,	PUNCT	_	_	14	punct	_	_
10	որը	որ	PRON	_	Case=Nom|Definite=Def|Number=Sing|PronType=Rel	14	nsubj:pass	_	_
11	2015	2015	NUM	_	NumForm=Digit|NumType=Card	12	nummod	_	_
12	թվականի	թվական	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	13	nmod:poss	_	_
13	համեմատությամբ	համեմատություն	NOUN	_	Animacy=Inan|Case=Ins|Definite=Ind|Number=Sing	14	obl	_	_
14	նվազել	նվազել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Mid	8	acl:relcl	_	_
15	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	14	aux	_	_
16	79-ով	79-	NOUN	_	Animacy=Inan|Case=Ins|Definite=Ind|Number=Sing|NumForm=Digit	14	obl	_	SpaceAfter=No
17	:	:	PUNCT	_	_	5	punct	_	_

~~~


~~~ conllu
# visual-style 11	bgColor:blue
# visual-style 11	fgColor:white
# visual-style 13	bgColor:blue
# visual-style 13	fgColor:white
# visual-style 13 11 obl:agent	color:blue
1	Երբ	երբ	SCONJ	_	_	2	mark	_	_
2	սկսեց	սկսել	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Tran|Tense=Past|VerbForm=Fin|Voice=Act	6	advcl	_	_
3	աշխատել	աշխատել	VERB	_	Polarity=Pos|Subcat=Intr|VerbForm=Inf|Voice=Mid	2	xcomp	_	SpaceAfter=No
4	,	,	PUNCT	_	_	6	punct	_	_
5	շատ	շատ	ADV	_	Degree=Pos	6	advmod	_	_
6	զարմացավ	զարմանալ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Subcat=Intr|Tense=Past|VerbForm=Fin|Voice=Mid	0	root	_	SpaceAfter=No
7	,	,	PUNCT	_	_	10	punct	_	_
8	որ	որ	SCONJ	_	_	10	mark	_	_
9	չի	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Neg|Tense=Pres|VerbForm=Fin	10	aux	_	_
10	զգում	զգալ	VERB	_	Aspect=Imp|Subcat=Tran|VerbForm=Part|Voice=Act	6	ccomp	_	_
11	ինքն	ինքը	PRON	_	Case=Nom|Definite=Def|Number=Sing|Person=3|PronType=Emp	13	obl:agent	_	_
12	իրենից	ինքը	PRON	_	Case=Abl|Definite=Ind|Number=Sing|Person=3|PronType=Emp|Reflex=Yes	13	obl	_	_
13	ակնկալվող	ակնկալել	VERB	_	Aspect=Dur|Polarity=Pos|Subcat=Intr|VerbForm=Part|Voice=Pass	14	acl	_	_
14	դիմադրությունը	դիմադրություն	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	10	obj	_	SpaceAfter=No
15	։	։	PUNCT	_	_	6	punct	_	_

~~~


~~~ conllu
# visual-style 9	bgColor:blue
# visual-style 9	fgColor:white
# visual-style 10	bgColor:blue
# visual-style 10	fgColor:white
# visual-style 10 9 obl:agent	color:blue
1	Դատական	դատական	ADJ	_	_	2	amod	_	_
2	գործը	գործ	NOUN	_	Animacy=Inan|Case=Nom|Definite=Def|Number=Sing	3	nsubj:pass	_	_
3	հարուցվել	հարուցել	VERB	_	Aspect=Perf|Subcat=Intr|VerbForm=Part|Voice=Pass	0	root	_	_
4	է	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Polarity=Pos|Tense=Pres|VerbForm=Fin	3	aux	_	_
5	2013	2013	NUM	_	NumForm=Digit|NumType=Card	6	nummod	_	_
6	թվականի	թվական	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	7	nmod:poss	_	_
7	մայիսի	մայիս	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	8	nmod:poss	_	_
8	15-ին	15	NOUN	_	Animacy=Inan|Case=Dat|Definite=Def|Number=Sing|NumForm=Digit	10	obl	_	_
9	Ջեմալի	Ջեմալ	PROPN	_	Animacy=Hum|Case=Dat|Definite=Ind|NameType=Sur|Number=Sing	10	obl:agent	_	_
10	հրապարակած	հրապարակել	VERB	_	Aspect=Perf|Polarity=Pos|Subcat=Tran|VerbForm=Part|Voice=Act	11	acl	_	_
11	հոդվածի	հոդված	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing	12	nmod:poss	_	_
12	հիման	հիմն	NOUN	_	Animacy=Inan|Case=Dat|Definite=Ind|Number=Sing|Style=Arch	3	obl	_	_
13	վրա	վրա	ADP	_	AdpType=Post|Case=Nom	12	case	_	SpaceAfter=No
14	:	:	PUNCT	_	_	3	punct	_	_

~~~



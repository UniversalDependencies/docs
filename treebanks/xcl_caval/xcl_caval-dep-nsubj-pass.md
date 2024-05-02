---
layout: base
title:  'Statistics of nsubj:pass in UD_Classical_Armenian-CAVaL'
udver: '2'
---

## Treebank Statistics: UD_Classical_Armenian-CAVaL: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="xcl_caval-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="xcl_caval-dep-nsubj-caus.html">nsubj:caus</a></tt>.

5 nodes (0%) are attached to their parents as `nsubj:pass`.

3 instances of `nsubj:pass` (60%) are left-to-right (parent precedes child).
Average distance between parent and child is 1.2.

The following 3 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-NOUN.html">NOUN</a></tt> (2; 40% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-PRON.html">PRON</a></tt> (2; 40% instances), <tt><a href="xcl_caval-pos-VERB.html">VERB</a></tt>-<tt><a href="xcl_caval-pos-PROPN.html">PROPN</a></tt> (1; 20% instances).


~~~ conllu
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 3 nsubj:pass	color:blue
1	եւ	եւ	CCONJ	_	_	2	cc	_	Translit=ew|LTranslit=ew|Gloss=and
2	արդարացաւ	արդարանամ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Translit=ardaracʻaw|LTranslit=ardaranam|Gloss=be_justified
3	իմաստութիւն	իմաստութիւն	NOUN	_	Case=Nom|Number=Sing	2	nsubj:pass	_	Translit=imastowtʻiwn|LTranslit=imastowtʻiwn|Gloss=wisdom
4	յ	ի	ADP	_	_	5	case	_	SpaceAfter=No|Translit=y|LTranslit=i|LId=ի-1|Gloss=to/in/from
5	որդւոց	որդի	NOUN	_	Case=Abl|Number=Plur	2	obl:agent	_	Translit=ordwocʻ|LTranslit=ordi|Gloss=son
6	իւրոց	իւր	DET	_	Case=Abl|Number=Plur|Person=3|Poss=Yes|PronType=Prs|Reflex=Yes	5	det	_	SpaceAfter=No|Translit=iwrocʻ|LTranslit=iwr|LId=իւր-1|Gloss=own
7	:	:	PUNCT	_	_	2	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 5 nsubj:pass	color:blue
1	Մարիամ	մարիամ	PROPN	_	Case=Nom|Number=Sing	4	nsubj	_	Translit=Mariam|LTranslit=mariam|Gloss=mariam
2	մասն	մասն	NOUN	_	Case=Acc|Number=Sing	4	obj	_	Translit=masn|LTranslit=masn|Gloss=part
3	բարի	բարի	ADJ	_	Case=Acc|Number=Sing	2	amod	_	Translit=bari|LTranslit=bari|Gloss=good
4	ընտրեաց	ընտրեմ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Act	0	root	_	Translit=əntreacʻ|LTranslit=əntrem|Gloss=choose
5	որ	որ	PRON	_	Case=Nom|Number=Sing|PronType=Rel	7	nsubj:pass	_	Translit=or|LTranslit=or|LId=որ-1|Gloss=which
6	ոչ	ոչ	PART	_	Polarity=Neg	7	advmod	_	Translit=očʻ|LTranslit=očʻ|Gloss=not
7	բարձցի	բառնամ	VERB	_	Aspect=Perf|Mood=Sub|Number=Sing|Person=3|VerbForm=Fin|Voice=Pass	2	acl	_	Translit=barjcʻi|LTranslit=baṙnam|Gloss=raise
8	ի	ի	ADP	_	_	9	case	_	Translit=i|LTranslit=i|LId=ի-1|Gloss=to/in/from
9	սմանէ	սա	PRON	_	Case=Abl|Number=Sing|PronType=Dem	7	obl:agent	_	SpaceAfter=No|Translit=smanē|LTranslit=sa|Gloss=this_one
10	:	:	PUNCT	_	_	4	punct	_	Translit=.|LTranslit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 7	bgColor:blue
# visual-style 7	fgColor:white
# visual-style 7 8 nsubj:pass	color:blue
1	Եւ	եւ	CCONJ	_	_	7	cc	_	Translit=Ew|LTranslit=ew|Gloss=and
2	յ	ի	ADP	_	_	3	case	_	SpaceAfter=No|Translit=y|LTranslit=i|LId=ի-1|Gloss=to/in/from
3	ամսեան	ամիս	NOUN	_	Case=Loc|Number=Sing	7	obl	_	SpaceAfter=No|Translit=amsean|LTranslit=amis|Gloss=month
4	ն	ն	DET	_	Definite=Def|PronType=Dem	3	det	_	Translit=n|LTranslit=n|Gloss=that
5	վեցերորդի	վեցերորդ	ADJ	_	Case=Loc|Number=Sing|NumType=Ord	3	amod	_	SpaceAfter=No|Translit=vecʻerordi|LTranslit=vecʻerord|Gloss=sixth
6	.	.	PUNCT	_	_	3	punct	_	Translit=:|LTranslit=:
7	առաքեցաւ	առաքեմ	VERB	_	Aspect=Perf|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin|Voice=Pass	0	root	_	Translit=aṙakʻecʻaw|LTranslit=aṙakʻem|Gloss=send
8	Գաբրիէղ	գաբրիէլ	PROPN	_	Case=Nom|Number=Sing	7	nsubj:pass	_	Translit=Gabriēł|LTranslit=gabriēl|Gloss=gabriēl
9	հրեշտակ	հրեշտակ	NOUN	_	Case=Nom|Number=Sing	8	appos	_	Translit=hreštak|LTranslit=hreštak|Gloss=angel
10	յ	ի	ADP	_	_	11	case	_	SpaceAfter=No|Translit=y|LTranslit=i|LId=ի-1|Gloss=to/in/from
11	Աստուածոյ	Աստուած	PROPN	_	Case=Gen|Number=Sing	7	obl:agent	_	Translit=Astowacoy|LTranslit=Astowac|Gloss=Astowac
12	ի	ի	ADP	_	_	13	case	_	Translit=i|LTranslit=i|LId=ի-1|Gloss=to/in/from
13	քաղաք	քաղաք	NOUN	_	Case=Acc|Number=Sing	7	obl	_	Translit=kʻałakʻ|LTranslit=kʻałakʻ|Gloss=city
14	մի	մի	DET	_	Case=Acc|Definite=Spec|Number=Sing	13	det	_	Translit=mi|LTranslit=mi|LId=մի-2|Gloss=certain
15	Գաղիղեացւոց	Գաղիղեացի	NOUN	_	Case=Gen|Number=Plur	13	nmod	_	Translit=Gałiłeacʻwocʻ|LTranslit=Gałiłeacʻi|Gloss=Galilean
16	որում	որ	PRON	_	Case=Dat|Number=Sing|PronType=Rel	19	iobj	_	Translit=orowm|LTranslit=or|LId=որ-1|Gloss=which
17	անուն	անուն	NOUN	_	Case=Nom|Number=Sing	19	nsubj	_	Translit=anown|LTranslit=anown|Gloss=name
18	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	19	cop	_	Translit=ēr|LTranslit=em|Gloss=be
19	Նազարեթ	Նազարէթ	PROPN	_	Case=Nom|Number=Sing	13	acl	_	SpaceAfter=No|Translit=Nazaretʻ|LTranslit=Nazarētʻ|Gloss=Nazarētʻ
20	.	.	PUNCT	_	_	22	punct	_	Translit=:|LTranslit=:
21	առ	առ	ADP	_	_	22	case	_	Translit=aṙ|LTranslit=aṙ|LId=առ-1|Gloss=by
22	կոյս	կոյս	NOUN	_	Case=Acc|Number=Sing	7	obl	_	Translit=koys|LTranslit=koys|LId=կոյս-2|Gloss=girl
23	խաւսեցեալ	խաւսիմ	VERB	_	Case=Acc|Number=Sing|Tense=Past|VerbForm=Part	22	acl	_	Translit=xawsecʻeal|LTranslit=xawsim|Gloss=speak
24	առն	այր	NOUN	_	Case=Dat|Number=Sing	23	iobj	_	Translit=aṙn|LTranslit=ayr|LId=այր-1|Gloss=man
25	որում	որ	PRON	_	Case=Dat|Number=Sing|PronType=Rel	28	iobj	_	Translit=orowm|LTranslit=or|LId=որ-1|Gloss=which
26	անուն	անուն	NOUN	_	Case=Nom|Number=Sing	28	nsubj	_	Translit=anown|LTranslit=anown|Gloss=name
27	էր	եմ	AUX	_	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Past|VerbForm=Fin	28	cop	_	Translit=ēr|LTranslit=em|Gloss=be
28	Յովսէփ	Յովսէփ	PROPN	_	Case=Nom|Number=Sing	24	acl	_	Translit=Yovsēpʻ|LTranslit=Yovsēpʻ|Gloss=Yovsēpʻ
29	ի	ի	ADP	_	_	30	case	_	Translit=i|LTranslit=i|LId=ի-1|Gloss=to/in/from
30	տանէ	տուն	NOUN	_	Case=Abl|Number=Sing	24	nmod	_	Translit=tanē|LTranslit=town|Gloss=house
31	Դաւթի	Դաւիթ	PROPN	_	Case=Gen|Number=Sing	30	nmod	_	SpaceAfter=No|Translit=Dawtʻi|LTranslit=Dawitʻ|Gloss=Dawitʻ
32	,	,	PUNCT	_	_	38	punct	_	Translit=,|LTranslit=,
33	եւ	եւ	CCONJ	_	_	38	cc	_	Translit=ew|LTranslit=ew|Gloss=and
34	անուն	անուն	NOUN	_	Case=Nom|Number=Sing	38	nsubj	_	Translit=anown|LTranslit=anown|Gloss=name
35	կուսի	կոյս	NOUN	_	Case=Gen|Number=Sing	34	nmod	_	SpaceAfter=No|Translit=kowsi|LTranslit=koys|LId=կոյս-2|Gloss=virgin
36	ն	ն	DET	_	Definite=Def|PronType=Dem	35	det	_	SpaceAfter=No|Translit=n|LTranslit=n|Gloss=that
37	.	.	PUNCT	_	_	34	punct	_	Translit=:|LTranslit=:
38	Մարիամ	մարիամ	PROPN	_	Case=Nom|Number=Sing	7	conj	_	SpaceAfter=No|Translit=Mariam|LTranslit=mariam|Gloss=mariam
39	:	:	PUNCT	_	_	7	punct	_	Translit=.|LTranslit=.

~~~



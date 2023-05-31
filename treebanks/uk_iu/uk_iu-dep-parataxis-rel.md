---
layout: base
title:  'Statistics of parataxis:rel in UD_Ukrainian-IU'
udver: '2'
---

## Treebank Statistics: UD_Ukrainian-IU: Relations: `parataxis:rel`

This relation is a language-specific subtype of <tt><a href="uk_iu-dep-parataxis.html">parataxis</a></tt>.
There are also 2 other language-specific subtypes of `parataxis`: <tt><a href="uk_iu-dep-parataxis-discourse.html">parataxis:discourse</a></tt>, <tt><a href="uk_iu-dep-parataxis-newsent.html">parataxis:newsent</a></tt>.

47 nodes (0%) are attached to their parents as `parataxis:rel`.

46 instances of `parataxis:rel` (98%) are left-to-right (parent precedes child).
Average distance between parent and child is 12.7659574468085.

The following 6 pairs of parts of speech are connected with `parataxis:rel`: <tt><a href="uk_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_iu-pos-VERB.html">VERB</a></tt> (26; 55% instances), <tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_iu-pos-VERB.html">VERB</a></tt> (8; 17% instances), <tt><a href="uk_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_iu-pos-ADV.html">ADV</a></tt> (8; 17% instances), <tt><a href="uk_iu-pos-NOUN.html">NOUN</a></tt>-<tt><a href="uk_iu-pos-VERB.html">VERB</a></tt> (3; 6% instances), <tt><a href="uk_iu-pos-ADJ.html">ADJ</a></tt>-<tt><a href="uk_iu-pos-NOUN.html">NOUN</a></tt> (1; 2% instances), <tt><a href="uk_iu-pos-VERB.html">VERB</a></tt>-<tt><a href="uk_iu-pos-DET.html">DET</a></tt> (1; 2% instances).


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 2 8 parataxis:rel	color:blue
1	Це	це	PRON	Pd--nnsnn	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	nsubj	2:nsubj	Id=0kqo|LTranslit=ce|Translit=Ce
2	спричинює	спричинювати	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Id=0kqp|LTranslit=spryčyńuvaty|Translit=spryčyńuě
3	кашель	кашель	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	2	obj	2:obj	Id=0kqq|LTranslit=kašeľ|Translit=kašeľ
4	і	і	CCONJ	Ccs	_	5	cc	5:cc	Id=0kqr|LTranslit=i|Translit=i
5	задуху	задуха	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	3	conj	2:obj|3:conj	Id=0kqs|LTranslit=zaducha|SpaceAfter=No|Translit=zaduchu
6	,	,	PUNCT	U	_	8	punct	8:punct	Id=0kqt|LTranslit=,|Translit=,
7	що	що	PRON	Pr--nnsnn	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	8	nsubj	8:nsubj|11:nsubj:xsubj	Id=0kqu|LTranslit=ščo|Translit=ščo
8	може	могти	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	2	parataxis:rel	2:parataxis	Id=0kqv|LTranslit=mohty|Translit=može
9	бути	бути	AUX	Vapn	Aspect=Imp|VerbForm=Inf	11	cop	11:cop	Id=0kqw|LTranslit=buty|Translit=buty
10	досить	досить	ADV	R	_	11	advmod	11:advmod	Id=0kqx|LTranslit=dosyť|Translit=dosyť
11	небезпечним	небезпечний	ADJ	Afpnsif	Case=Ins|Degree=Pos|Gender=Neut|Number=Sing	8	xcomp	8:xcomp	Id=0kqy|LTranslit=nebezpečnyj|SpaceAfter=No|Translit=nebezpečnym
12	.	.	PUNCT	U	_	2	punct	2:punct	Id=0kqz|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 5 8 parataxis:rel	color:blue
1	При	при	ADP	Spsl	Case=Loc	2	case	2:case	Id=2wb6|LTranslit=pry|Translit=Pry
2	цьому	це	PRON	Pd--nnsln	Animacy=Inan|Case=Loc|Gender=Neut|Number=Sing|PronType=Dem	5	obl	5:obl	Id=2wb7|LTranslit=ce|Translit=ćomu
3	обшивка	обшивка	NOUN	Ncfsnn	Animacy=Inan|Case=Nom|Gender=Fem|Number=Sing	5	nsubj	5:nsubj	Id=2wb8|LTranslit=obšyvka|Translit=obšyvka
4	була	бути	AUX	Vapis-sf	Aspect=Imp|Gender=Fem|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	5	cop	5:cop	Id=2wb9|LTranslit=buty|Translit=bula
5	робочою	робочий	ADJ	Ao-fsif	Case=Ins|Gender=Fem|Number=Sing	0	root	0:root	Id=2wba|LTranslit=robočyj|SpaceAfter=No|Translit=robočoju
6	,	,	PUNCT	U	_	8	punct	8:punct	Id=2wbb|LTranslit=,|Translit=,
7	що	що	PRON	Pr--nnsnn	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	8	nsubj	8:nsubj|9:nsubj:xsubj	Id=2wbc|LTranslit=ščo|Translit=ščo
8	дозволило	дозволити	VERB	Vmeis-sn	Aspect=Perf|Gender=Neut|Mood=Ind|Number=Sing|Tense=Past|VerbForm=Fin	5	parataxis:rel	5:parataxis	Id=2wbd|LTranslit=dozvolyty|Translit=dozvolylo
9	полегшити	полегшити	VERB	Vmen	Aspect=Perf|VerbForm=Inf	8	xcomp	8:xcomp	Id=2wbe|LTranslit=polehšyty|Translit=polehšyty
10	конструкцію	конструкція	NOUN	Ncfsan	Animacy=Inan|Case=Acc|Gender=Fem|Number=Sing	9	obj	9:obj	Id=2wbf|LTranslit=konstrukcija|Translit=konstrukciju
11	літака	літак	NOUN	Ncmsgn	Animacy=Inan|Case=Gen|Gender=Masc|Number=Sing	10	nmod	10:nmod	Id=2wbg|LTranslit=litak|SpaceAfter=No|Translit=litaka
12	.	.	PUNCT	U	_	5	punct	5:punct	Id=2wbh|LTranslit=.|Translit=.

~~~


~~~ conllu
# visual-style 16	bgColor:blue
# visual-style 16	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 16 parataxis:rel	color:blue
1	«	«	PUNCT	U	PunctType=Quot	4	punct	4:punct	Id=1z8z|LTranslit=«|SpaceAfter=No|Translit=«
2	Тепер	тепер	ADV	Pd------r	PronType=Dem	4	advmod	4:advmod	Id=1z90|LTranslit=teper|Translit=Teper
3	забудовник	забудовник	NOUN	Ncmsny	Animacy=Anim|Case=Nom|Gender=Masc|Number=Sing	4	nsubj	4:nsubj|5:nsubj:xsubj	Id=1z91|LTranslit=zabudovnyk|Translit=zabudovnyk
4	планує	планувати	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	0	root	0:root	Id=1z92|LTranslit=planuvaty|Translit=planuě
5	відбити	відбити	VERB	Vmen	Aspect=Perf|VerbForm=Inf	4	xcomp	4:xcomp	Id=1z93|LTranslit=vidbyty|Translit=vidbyty
6	вкладені	вкладений	ADJ	Ap--pasnep	Animacy=Inan|Aspect=Perf|Case=Acc|Number=Plur|VerbForm=Part|Voice=Pass	7	amod	7:amod	Id=1z94|LTranslit=vkladenyj|Translit=vkladeni
7	кошти	кошти	NOUN	Nc-pan	Animacy=Inan|Case=Acc|Number=Ptan	5	obj	5:obj	Id=1z95|LTranslit=košty|Translit=košty
8	і	і	CCONJ	Ccs	_	9	cc	9:cc	Id=1z96|LTranslit=i|Translit=i
9	мати	мати	VERB	Vmpn	Aspect=Imp|VerbForm=Inf	5	conj	4:xcomp|5:conj	Id=1z97|LTranslit=maty|Translit=maty
10	прибуток	прибуток	NOUN	Ncmsan	Animacy=Inan|Case=Acc|Gender=Masc|Number=Sing	9	obj	9:obj	Id=1z98|LTranslit=prybutok|SpaceAfter=No|Translit=prybutok
11	,	,	PUNCT	U	_	16	punct	16:punct	Id=1z99|LTranslit=,|Translit=,
12	що	що	PRON	Pr--nnsnn	Animacy=Inan|Case=Nom|Gender=Neut|Number=Sing|PronType=Rel	16	nsubj	16:nsubj	Id=1z9a|LTranslit=ščo|SpaceAfter=No|Translit=ščo
13	,	,	PUNCT	U	_	14	punct	14:punct	Id=1z9b|LTranslit=,|Translit=,
14	зрештою	зрештою	ADV	R	_	16	discourse	16:discourse	Id=1z9c|LTranslit=zreštoju|SpaceAfter=No|Translit=zreštoju
15	,	,	PUNCT	U	_	14	punct	14:punct	Id=1z9d|LTranslit=,|Translit=,
16	зрозуміло	зрозуміло	ADV	Rp	Degree=Pos	4	parataxis:rel	4:parataxis	Id=1z9e|LTranslit=zrozumilo|SpaceAfter=No|Translit=zrozumilo
17	,	,	PUNCT	U	_	19	punct	19:punct	Id=1z9f|LTranslit=,|Translit=,
18	–	–	PUNCT	U	PunctType=Dash	19	punct	19:punct	Id=1z9g|LTranslit=–|Translit=–
19	говорить	говорити	VERB	Vmpip3s	Aspect=Imp|Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin	4	parataxis	4:parataxis	Id=1z9h|LTranslit=hovoryty|Translit=hovoryť
20	він	він	PRON	Pp-3m-snn	Case=Nom|Gender=Masc|Number=Sing|Person=3|PronType=Prs	19	nsubj	19:nsubj	Id=1z9i|LTranslit=vin|SpaceAfter=No|Translit=vin
21	.	.	PUNCT	U	_	19	punct	19:punct	Id=1z9j|LTranslit=.|Translit=.

~~~



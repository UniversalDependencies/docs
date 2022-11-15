---
layout: base
title:  'Statistics of nsubj:pass in UD_Sanskrit-UFAL'
udver: '2'
---

## Treebank Statistics: UD_Sanskrit-UFAL: Relations: `nsubj:pass`

This relation is a language-specific subtype of <tt><a href="sa_ufal-dep-nsubj.html">nsubj</a></tt>.
There are also 1 other language-specific subtypes of `nsubj`: <tt><a href="sa_ufal-dep-nsubj-cop.html">nsubj:cop</a></tt>.

36 nodes (2%) are attached to their parents as `nsubj:pass`.

27 instances of `nsubj:pass` (75%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.25.

The following 8 pairs of parts of speech are connected with `nsubj:pass`: <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (22; 61% instances), <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt> (8; 22% instances), <tt><a href="sa_ufal-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt> (1; 3% instances), <tt><a href="sa_ufal-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa_ufal-pos-PRON.html">PRON</a></tt> (1; 3% instances), <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-ADJ.html">ADJ</a></tt> (1; 3% instances), <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-DET.html">DET</a></tt> (1; 3% instances), <tt><a href="sa_ufal-pos-VERB.html">VERB</a></tt>-<tt><a href="sa_ufal-pos-PROPN.html">PROPN</a></tt> (1; 3% instances).


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 nsubj:pass	color:blue
1	अथवा	अथवा	ADV	_	_	4	advmod	_	Translit=athavā|LTranslit=athavā|Gloss=after-all
2	साधु	साधु	NOUN	_	Case=Nom|Gender=Neut|Number=Sing	4	nsubj:pass	_	Translit=sādhu|LTranslit=sādhu|Gloss=wise-thing
3	इदम्	इदम्	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	2	det	_	Translit=idam|LTranslit=idam|Gloss=this
4	उच्यते	वच्	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Translit=ucyate|LTranslit=vac|Gloss=said
5	-	-	PUNCT	_	_	4	punct	_	Translit=-|LTranslit=-|Gloss=-

~~~


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 1 nsubj:pass	color:blue
1	किम्	किम्	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Int	3	nsubj:pass	_	LId=क-१|Translit=kim|LTranslit=kim|Gloss=what
2	तया	तद्	DET	_	Case=Ins|Gender=Fem|Number=Sing|Person=3|PronType=Dem	4	det	_	Translit=tayā|LTranslit=tad|Gloss=with-this
3	क्रियते	कृ	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	LId=कृ-१|Translit=kriyate|LTranslit=kr̥|Gloss=done
4	धेन्वा	धेनु	NOUN	_	Case=Ins|Gender=Fem|Number=Sing	3	obl	_	Translit=dhenvā|LTranslit=dhenu|Gloss=with-cow
5	या	यद्	PRON	_	Case=Nom|Gender=Fem|Number=Sing|PronType=Rel	10	nsubj	_	Translit=yā|LTranslit=yad|Gloss=which
6	न	न	PART	_	Polarity=Neg	10	advmod	_	Translit=na|LTranslit=na|Gloss=not
7	सूते	सू	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Mid	10	obj	_	Translit=sūte|LTranslit=sū|Gloss=calves
8	न	न	PART	_	Polarity=Neg	10	advmod	_	Translit=na|LTranslit=na|Gloss=not
9	क्षीरम्	क्षीर	NOUN	_	Case=Acc|Gender=Neut|Number=Sing	7	conj	_	Translit=kṣīram|LTranslit=kṣīra|Gloss=milk
10	ददाति	दा	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Act	4	acl:relcl	_	SpaceAfter=No|Translit=dadāti|LTranslit=dā|Gloss=gives
11	।	।	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 4 nsubj:pass	color:blue
1	भोः	भोस्	INTJ	_	_	3	vocative	_	SpaceAfter=No|Translit=bhoḥ|LTranslit=bhos|Gloss=oh-gentlemen
2	,	,	PUNCT	_	_	1	punct	_	Translit=,|LTranslit=,|Gloss=,
3	ज्ञातम्	ज्ञा	ADJ	_	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Translit=jñātam|LTranslit=jñā|Gloss=known
4	एतद्	एतद्	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj:pass	_	Translit=etad|LTranslit=etad|Gloss=this
5	भवद्भिः	भवत्	PRON	_	Case=Ins|Gender=Masc|Number=Plur|Person=3|Polite=Form|PronType=Prs	3	obl:agent	_	Translit=bhavadbhiḥ|LTranslit=bhavat|Gloss=by-you
6	यत्	यद्	SCONJ	_	_	13	mark	_	Translit=yat|LTranslit=yad|Gloss=that
7	मम	अस्मद्	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	11	nmod:poss	_	Translit=mama|LTranslit=asmad|Gloss=my
8	एते	एतद्	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	11	det	_	Translit=ete|LTranslit=etad|Gloss=these
9	त्रयः	त्रि	NUM	_	Case=Nom|Gender=Masc|Number=Plur|NumType=Card	11	nummod	_	Translit=trayaḥ|LTranslit=tri|Gloss=three
10	अपि	अपि	ADV	_	_	13	advmod	_	Translit=api|LTranslit=api|Gloss=also
11	पुत्राः	पुत्र	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	13	nsubj	_	Translit=putrāḥ|LTranslit=putra|Gloss=sons
12	शास्त्र	शास्त्र	NOUN	_	Compound=Yes	13	obl	_	Translit=śāstra|LTranslit=śāstra|Gloss=education
13	विमुखा	विमुख	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	4	ccomp	_	Translit=vimukhā|LTranslit=vimukha|Gloss=disinclined
14	विवेक	विवेक	NOUN	_	Compound=Yes	15	obj	_	Translit=viveka|LTranslit=viveka|Gloss=discernment
15	हीनाः	हीन	ADJ	_	Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	13	conj	_	Translit=hīnāḥ|LTranslit=hī|Gloss=lacking
16	च	च	CCONJ	_	_	15	cc	_	Translit=ca|LTranslit=ca|Gloss=and
17	।	।	PUNCT	_	_	13	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~



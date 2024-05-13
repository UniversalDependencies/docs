---
layout: base
title:  'Statistics of obl:agent in UD_Sanskrit'
udver: '2'
---

## Treebank Statistics: UD_Sanskrit: Relations: `obl:agent`

This relation is a language-specific subtype of <tt><a href="sa-dep-obl.html">obl</a></tt>.
There are also 1 other language-specific subtypes of `obl`: <tt><a href="sa-dep-obl-arg.html">obl:arg</a></tt>.

19 nodes (1%) are attached to their parents as `obl:agent`.

16 instances of `obl:agent` (84%) are right-to-left (child precedes parent).
Average distance between parent and child is 2.47368421052632.

The following 6 pairs of parts of speech are connected with `obl:agent`: <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-PRON.html">PRON</a></tt> (8; 42% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (7; 37% instances), <tt><a href="sa-pos-ADJ.html">ADJ</a></tt>-<tt><a href="sa-pos-PRON.html">PRON</a></tt> (1; 5% instances), <tt><a href="sa-pos-NOUN.html">NOUN</a></tt>-<tt><a href="sa-pos-NOUN.html">NOUN</a></tt> (1; 5% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-DET.html">DET</a></tt> (1; 5% instances), <tt><a href="sa-pos-VERB.html">VERB</a></tt>-<tt><a href="sa-pos-PROPN.html">PROPN</a></tt> (1; 5% instances).


~~~ conllu
# visual-style 1	bgColor:blue
# visual-style 1	fgColor:white
# visual-style 8	bgColor:blue
# visual-style 8	fgColor:white
# visual-style 8 1 obl:agent	color:blue
1	अस्माभिः	अहम्	PRON	_	Case=Ins|Number=Plur|Person=1|PronType=Prs	8	obl:agent	_	Translit=asmābhiḥ|LTranslit=aham|Gloss=by-us
2	तु	तु	CCONJ	_	_	8	cc	_	Translit=tu|LTranslit=tu|Gloss=however
3	सार्थवाहस्य	सार्थवाह्स्य	NOUN	_	Case=Gen|Gender=Masc|Number=Sing	4	nmod:poss	_	Translit=sārthavāhasya|LTranslit=sārthavāhsya|Gloss=of-caravan-wagon
4	अभीष्ट	अभीष्ट	VERB	_	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	7	amod	_	Translit=abhīṣṭa|LTranslit=abhīṣṭa|Gloss=strived
5	इति	इति	ADV	_	_	6	advmod	_	Translit=iti|LTranslit=iti|Gloss=this-way
6	मत्वा	मन्	VERB	_	VerbForm=Conv	8	advcl	_	Translit=matvā|LTranslit=man|Gloss=having-thought,decided
7	वह्निना	वह्नि	NOUN	_	Case=Ins|Gender=Masc|Number=Sing	8	obl	_	Translit=vahninā|LTranslit=vahni|Gloss=with-dairy-animal
8	संस्कृतः	सं-कृ	VERB	_	Case=Nom|Gender=Masc|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	SpaceAfter=No|Translit=saṁskr̥taḥ|LTranslit=saṁ-kr̥|Gloss=prepared
9	।	।	PUNCT	_	_	8	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~


~~~ conllu
# visual-style 2	bgColor:blue
# visual-style 2	fgColor:white
# visual-style 4	bgColor:blue
# visual-style 4	fgColor:white
# visual-style 4 2 obl:agent	color:blue
1	अथवा	अथवा	ADV	_	_	4	advmod	_	Translit=athavā|LTranslit=athavā|Gloss=after-all
2	साधू	साधु	NOUN	_	Case=Nom|Gender=Masc|Number=Dual	4	obl:agent	_	Translit=sādhū|LTranslit=sādhu|Gloss=sadhus
3	इदम्	इदम्	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	4	nsubj:pass	_	Translit=idam|LTranslit=idam|Gloss=this
4	उच्यते	वच्	VERB	_	Mood=Ind|Number=Sing|Person=3|Tense=Pres|VerbForm=Fin|Voice=Pass	0	root	_	Translit=ucyate|LTranslit=vac|Gloss=said
5	-	-	PUNCT	_	_	4	punct	_	Translit=-|LTranslit=-|Gloss=-

~~~


~~~ conllu
# visual-style 5	bgColor:blue
# visual-style 5	fgColor:white
# visual-style 3	bgColor:blue
# visual-style 3	fgColor:white
# visual-style 3 5 obl:agent	color:blue
1	भोः	भोस्	INTJ	_	_	3	vocative	_	SpaceAfter=No|Translit=bhoḥ|LTranslit=bhos|Gloss=oh-gentlemen
2	,	,	PUNCT	_	_	1	punct	_	Translit=,|LTranslit=,|Gloss=,
3	ज्ञातम्	ज्ञात	ADJ	_	Case=Nom|Gender=Neut|Number=Sing|Tense=Past|VerbForm=Part|Voice=Pass	0	root	_	Translit=jñātam|LTranslit=jñāta|Gloss=known
4	एतद्	एतद्	PRON	_	Case=Nom|Gender=Neut|Number=Sing|PronType=Dem	3	nsubj	_	Translit=etad|LTranslit=etad|Gloss=this
5	भवद्भिः	भवत्	PRON	_	Case=Ins|Gender=Masc|Number=Plur|Person=3|Polite=Form|PronType=Prs	3	obl:agent	_	Translit=bhavadbhiḥ|LTranslit=bhavat|Gloss=by-you
6	यत्	यद्	SCONJ	_	_	12	mark	_	Translit=yat|LTranslit=yad|Gloss=that
7	मम	अस्मद्	PRON	_	Case=Gen|Number=Sing|Person=1|PronType=Prs	11	nmod	_	Translit=mama|LTranslit=asmad|Gloss=my
8	एते	एतद्	PRON	_	Case=Nom|Gender=Masc|Number=Plur|PronType=Dem	11	det	_	Translit=ete|LTranslit=etad|Gloss=these
9	त्रयः	त्रि	NUM	_	Case=Nom|Gender=Masc|Number=Plur|NumType=Card	3	nummod	_	Translit=trayaḥ|LTranslit=tri|Gloss=three
10	अपि	अपि	ADV	_	_	11	advmod	_	Translit=api|LTranslit=api|Gloss=also
11	पुत्राः	पुत्र	NOUN	_	Case=Nom|Gender=Masc|Number=Plur	12	nsubj	_	Translit=putrāḥ|LTranslit=putra|Gloss=sons
12	शास्त्रविमुखा	शास्त्रविमुख	ADJ	_	Case=Nom|Gender=Masc|Number=Plur	4	acl	_	Translit=śāstravimukhā|LTranslit=śāstravimukha|Gloss=ignorant-of-education
13	विवेक	विवेक	NOUN	_	Gender=Masc	14	compound	_	Translit=viveka|LTranslit=viveka|Gloss=discernment
14	हीनाः	हीन	ADJ	_	Case=Nom|Gender=Masc|Number=Plur|Tense=Past|VerbForm=Part|Voice=Pass	12	conj	_	Translit=hīnāḥ|LTranslit=hīna|Gloss=lacking
15	च	च	CCONJ	_	_	14	cc	_	Translit=ca|LTranslit=ca|Gloss=and
16	।	।	PUNCT	_	_	3	punct	_	Translit=.|LTranslit=.|Gloss=.

~~~



---
layout: base
title:  'Introduction'
permalink: it/overview/introduction.html
udver: '2'
---

# Introduction

The Italian section of Universal Dependencies currently comprises four resources: 
* UD_Italian (available since UD v.1)
* UD_Italian-ParTUT (available since UD v.2)
* UD_Italian-PUD (available since UD v.2) 
* UD_Italian-PoSTWITA (available since UD v.2.1). 

## UD_Italian 

It was obtained by conversion from ISDT (Italian Stanford Dependency Treebank), released for the dependency parsing shared task of Evalita-2014 (Bosco et al. 2014).

ISDT is a resource annotated according to the Stanford dependencies scheme (de Marneffe et al. 2008, 2013a, 2013b, 2014), obtained through a semi-automatic conversion process starting from MIDT (the Merged Italian Dependency Treebank).
MIDT in turn was obtained merging two existing Italian treebanks, differing both in corpus composition and adopted annotation schemes: 

* TUT, the Turin University Treebank (Bosco et al. 2000)
* ISST-TANL, first released as ISST-CoNLL for the CoNLL-2007 shared task (Montemagni, Simi 2007).

The details of the harmonization and conversion process leading to MIDT were discussed in (Bosco, Montemagni, Simi, 2012). 
The Stanford annotation scheme, obtained from an enriched version of MIDT,
was adapted to the specificity of the Italian language. 
We refer to (Bosco, Montemagni, Simi, 2013 and 2014) for a discussion. 

The first preliminary release was issued in January 2015.

### Corpus composition

<table>
<tr style="background-color: #eee"><th>Original format</th><th>Source</th><th>Genre</th><th>Size in tokens</th><th>Size in sentences</th>
</tr>
<tr><td>TUT-CONLL</td><td>Evalita 2011 Dependency parsing</td><td>Legal texts, news articles, Wikipedia articles</td><td>101,309</td><td>3,842</td></tr>
<tr><td>ISST-TANL</td><td>Evalita 2011 Domain adaptation task</td><td>Newspaper articles</td><td>80,967</td><td>4,135</td></tr>
<tr><td>ISST-TANL</td><td>SPLeT 2012 </td><td>Legal texts: European directives</td><td>6,166</td><td>260</td></tr>
<tr><td>MIDT</td><td>Several QA competitions</td><td>Questions</td><td>20,680</td><td>2,228</td></tr>
<tr><td>MIDT</td><td>Evalita 2014 Dependency parsing:test data set (partial)</td><td>News articles</td><td>7,618</td><td>304</td></tr>
<tr><td>TUT-CONLL</td><td>Parallel TUT (Italian part)</td><td>Various genres</td><td>55,942</td><td>2,131</td></tr
<tr><td>UD</td><td>Due Parole</td><td>Simplified Italian news</td><td>19,992</td><td>1,138</td></tr>
<tr><td>UD2</td><td>New data</td><td>Various sentences</td><td>2,504</td><td>150</td></tr>
<tr><td></td><td></td><td>TOTAL</td><td><b>295,178</b></td><td><b>14,188</b></td></tr>
</table>

## UD_Italian-ParTUT 

UD_Italian-ParTUT data is derived from the already-existing parallel treebank Par(allel)TUT.

ParTUT is a morpho-syntactically annotated collection of Italian/French/English parallel sentences, 
which includes texts from different sources and representing different genres and domains, released in several formats.

ParTUT comprises approximately 167,000 tokens, with an average amount
of 2,100 sentences per language. The texts of the collection currently available were
gathered from a large number of sources and domains:
* the [Creative Commons](http://creativecommons.org/licenses/by-nc-sa/2.0) open license;
* the [DGT-Translation Memory](https://ec.europa.eu/jrc/en/language-technologies/dgt-translation-memory)
* the [Europarl](http://www.statmt.org/europarl/) parallel corpus (section ep_00_01_17);
* publicly available pages from [Facebook website](https://www.facebook.com/help/345121355559712/);
* the [JRC-Acquis multilingual parallel corpus](http://optima.jrc.it/Acquis/index_2.2.html) (section jrc52006DC243);
* several articles from [Project Syndicate©](https://www.project-syndicate.org/);
* the [Universal Declaration of Human Rights](http://www.ohchr.org/EN/UDHR/Pages/SearchByLang.aspx);
* Wikipedia articles retrieved in the English section and then translated into Italian only by graduate students in Translation  Studies;
* the [Web Inventory of Translated Talks](https://wit3.fbk.eu/mt.php?release=2012-02) .

ParTUT data can be downloaded [here](http://www.di.unito.it/~tutreeb/treebanks.html) and [here](https://github.com/msang/partut-repo) (CoNLL format only).


## UD_Italian-PoSTWITA  

PoSTWITA-UD was created by enriching the dataset used for the [EVALITA 2016 task of Part-of-Speech tagging of Social Media](http://www.evalita.it/2016/tasks/postwita) (see (Bosco et al. 2016)).
The original corpus consists of 6,438 tweets of the development set (114,967 tokens) and 300 tweets of the test set (4,759 tokens), annotated at PoS level only. 
The conversion and syntactic annotation process was carried out through alternating steps of automatic scripting and manual revision, and finally with some out-of-domain parsing experiments. Parsing results also underwent a manual revision by two independent annotators.

The section of PoSTWITA that has been revised so far (approximately the first half of the corpus) consists of 3,510 tweets (61,887 tokens).


## UD_Italian-PUD 

[Github repository](https://github.com/UniversalDependencies/UD_Italian-PUD )


## References

* Cristina Bosco, Vincenzo Lombardo, Leonardo Lesmo, Daniela Vassallo. 2000.
	[Building a treebank for italian: a data-driven annotation](http://www.di.unito.it/~bosco/publicat/lrec00.zip)
	schema. In *Proceedings of LREC 2000*, Athens, Greece.

* Cristina Bosco, Simonetta Montemagni, Maria Simi. 2012. [Harmonization and Merging of two Italian Dependency Treebanks, Workshop on Merging of Language Resources](http://www.lrec-conf.org/proceedings/lrec2012/workshops/06.LREC%202012%20Merging%20Proceedings.pdf), in *Proceedings of LREC 2012*, Workshop on Language Resource Merging, Instanbul, May 2012, ELRA, pp. 23-30.

* Cristina Bosco, Simonetta Montemagni, Maria Simi. 2013. [Converting Italian Treebanks: Towards an Italian Stanford Dependency Treebank](http://acl.eldoc.ub.rug.nl/mirror/W/W13/W13-2308.pdf). In *Proceedings of the 7th Linguistic Annotation Workshop & Interoperability with Discourse* (LAW VII & ID at ACL-2013), Sofia, Bulgaria, August 8-9, pp. 61-69.

* Cristina Bosco, Felice Dell’Orletta, Simonetta Montemagni, Manuela Sanguinetti, Maria Simi. 2014.
	[The Evalita 2014 Dependency Parsing task](http://clic.humnet.unipi.it/proceedings/Proceedings-EVALITA-2014.pdf), *CLiC-it 2014 and EVALITA 2014 Proceedings*, 
	Pisa University Press, ISBN/EAN: 978-886741-472-7, pp. 1-8.
	
* Cristina Bosco, Fabio Tamburini, Andrea Bolioli, Alessandro Mazzei. 2016. Overview of the EVALITA 2016 Part Of Speech on TWitter for ITAlian task. In: Proceedings of Evalita 2016
	
* Marie-Catherine de Marneffe and Christopher D. Manning. 2008. 
  [The Stanford typed dependencies representation](http://nlp.stanford.edu/pubs/dependencies-coling08.pdf). 
  In *COLING Workshop on Cross-framework and Cross-domain Parser Evaluation*.

* Marie-Catherine de Marneffe, Miriam Connor, Natalia Silveira, Bowman S. R., Timothy Dozat, Christopher D. Manning. 2013. [More constructions, more genres: Extending Stanford Dependencies](https://www.aclweb.org/anthology/W/W13/W13-37.pdf), *Proc. of the Second International Conference on Dependency Linguistics* (DepLing 2013), Prague, August 27–30, Charles University in Prague, Matfyzpress, Prague, pp. 187–196.
  
* Marie-Catherine de Marneffe and Christopher D. Manning. 2013. [Stanford typed dependencies manual](http://nlp.stanford.edu/software/dependencies_manual.pdf), 
	September 2008, Revised for the Stanford Parser v. 3.3 in December 2013. 

* Marie-Catherine de Marneffe, Timothy Dozat, Natalia Silveira, Katri
  Haverinen, Filip Ginter, Joakim Nivre, Christopher Manning. 2014.
  [Universal Stanford Dependencies: A cross-linguistic typology](http://nlp.stanford.edu/pubs/USD_LREC14_paper_camera_ready.pdf).
  In *Proceedings of LREC 2014*.
  
* Simonetta Montemagni, Maria Simi. 2007. [The Italian dependency annotated corpus developed for the CoNLL–2007 shared task](http://medialab.di.unipi.it/isst/). Technical report, ILC–CNR.

* Manuela Sanguinetti, Cristina Bosco. 2014. PartTUT: The Turin University Parallel Treebank. 
  In Basili, Bosco, Delmonte, Moschitti, Simi (editors) Harmonization and development of resources and tools for Italian Natural Language Processing within the PARLI project, LNCS, Springer Verlag

* Manuela Sanguinetti, Cristina Bosco, Alessandro Mazzei, ALberto Lavelli, Fabio Tamburini. 2017. [Annotating Italian Social Media Texts in Universal Dependencies](http://aclweb.org/anthology/W17-6526). In: Proceedings of the Fourth International Conference on Dependency Linguistics (Depling 2017), Pisa (Italy), pp. 229–239

* Maria Simi, Cristina Bosco, Simonetta Montemagni. 2014. [Less is More? Towards a Reduced Inventory of Categories for Training a Parser for the Italian Stanford Dependencies](http://www.lrec-conf.org/proceedings/lrec2014/summaries/818.html). 2014. In *Proceedings of LREC 2014*, ELRA, pp. 83–90.





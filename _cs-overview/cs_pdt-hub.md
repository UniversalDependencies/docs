---
layout: base
title:  'UD_Czech'
permalink: cs/overview/cs_pdt-hub.html
udver: '2'
---

<!-- This page is automatically generated from the README file and from the data files in the latest release.
     Please do not edit this page directly. -->

# UD Czech

This treebank has been part of Universal Dependencies since the UD v1.0 release.

The following people have contributed to making this treebank part of UD: Daniel Zeman, Jan Hajič.

Repository: [UD_Czech](https://github.com/UniversalDependencies/UD_Czech)

License: CC BY-NC-SA 3.0

Questions, comments?
General annotation questions (either Czech-specific or cross-linguistic) can be raised in the [main UD issue tracker](https://github.com/UniversalDependencies/docs/issues).
You can report bugs in this treebank in the [treebank-specific issue tracker on Github](https://github.com/UniversalDependencies/UD_Czech/issues).
If you want to collaborate, please contact [zeman&nbsp;(æt)&nbsp;ufal&nbsp;•&nbsp;mff&nbsp;•&nbsp;cuni&nbsp;•&nbsp;cz].
Development of the treebank happens outside the UD repository.
If there are bugs, either the original data source or the conversion procedure must be fixed.
Do not submit pull requests against the UD repository.

| Genre | news |
|------------|--------|
| Lemmas | annotated manually in non-UD style, automatically converted to UD |
| UPOS | annotated manually in non-UD style, automatically converted to UD |
| XPOS | annotated manually |
| Features | annotated manually in non-UD style, automatically converted to UD |
| Relations | annotated manually in non-UD style, automatically converted to UD |

The Czech UD treebank is based on the Prague Dependency Treebank 3.0 (PDT),
created at the Charles University in Prague. The treebank consists of 87,913
sentences (1.5 M tokens) and its domain is mainly newswire, reaching also to
business and popular scientific articles from the 1990s. The treebank is
licensed under the terms of CC BY-NC-SA 3.0 and its original (non-UD) version
can be downloaded from

http://hdl.handle.net/11858/00-097C-0000-0023-1AAF-3.

The morphological and syntactic annotation of the Czech UD treebank is created
through a conversion of PDT data. The conversion procedure has been designed by
Dan Zeman.

NOTE: Earlier releases of the treebank had four training data files. This was
due to Github restrictions on file size. We have now re-joined the training
files in the official release package (beginning with UD v1.3), so there is
just one training file as in all other languages, and it is named
cs-ud-train.conllu. The four files in previous releases corresponded to the
four sources of the original texts; the sources may still be distinguished,
if desirable, by the prefixes of sentence ids. All of them are newspapers, but

* l (ln) and m (mf) are mainstream daily papers (news, commentaries, but also
  sports results and TV programs)
* c (cmpr) is a business weekly
* v (vesm) contains popular scientific articles (the hardest to parse: long
  sentences and unusual vocabulary)

The dev and test sets contain all four sources and their size is proportional
to the sizes of the respective training parts.


Acknowledgments

We wish to thank all of the contributors to the original PDT annotation effort,
including Eduard Bejček, Eva Hajičová, Jan Hajič, Pavlína Jínová,
Václava Kettnerová, Veronika Kolářová, Marie Mikulová, Jiří Mírovský,
Anna Nedoluzhko, Jarmila Panevová, Lucie Poláková, Magda Ševčíková,
Jan Štěpánek, and Šárka Zikánová.


References

* Eduard Bejček, Eva Hajičová, Jan Hajič, Pavlína Jínová, Václava Kettnerová,
  Veronika Kolářová, Marie Mikulová, Jiří Mírovský, Anna Nedoluzhko,
  Jarmila Panevová, Lucie Poláková, Magda Ševčíková, Jan Štěpánek,
  and Šárka Zikánová. 2013. Prague Dependency Treebank 3.0,
  LINDAT/CLARIN digital library at Institute of Formal and Applied Linguistics,
  Charles University in Prague,
  http://hdl.handle.net/11858/00-097C-0000-0023-1AAF-3.




function downloadSVGs() {

  let svgs = document.querySelectorAll('svg')

  for ( let svg of svgs ) {

    svg.setAttribute('viewBox', '0 0 1000 500')

    let serializer = new XMLSerializer()
    let source = serializer.serializeToString(svg)

    if ( !source.match( /^<svg[^>]+xmlns="http\:\/\/www\.w3\.org\/2000\/svg"/ ) )
      source = source.replace( /^<svg/, '<svg xmlns="http://www.w3.org/2000/svg"' )

    if ( !source.match( /^<svg[^>]+"http\:\/\/www\.w3\.org\/1999\/xlink"/ ) )
      source = source.replace( /^<svg/, '<svg xmlns:xlink="http://www.w3.org/1999/xlink"' )

    source = "<?xml version=\"1.0\" standalone=\"no\"?>\r\n" + source

    let url = "data:image/svg+xml;charset=utf-8,"+encodeURIComponent(source)

    let link = document.createElement( 'a' )

    link.setAttribute( 'download', svg.id + '.svg' );
    link.href = url
    link.click()

  }

}
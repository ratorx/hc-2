#! /usr/bin/python3
from http.server import BaseHTTPRequestHandler, HTTPServer

import response

ret = ""

class ServerHandler(BaseHTTPRequestHandler):

    def do_GET(self):
        global ret # pylint: disable=W0603
        # Send response status code
        self.send_response(200)

        # Send headers
        self.send_header('Content-type', 'application/json')
        self.send_header('Connection', 'close')
        self.end_headers()

        # Write content as utf-8 data
        self.wfile.write(bytes(ret, "utf8"))

        ret = response.get_json()

        return


def run():
    global ret # pylint: disable=W0603
    print('starting server...')

    ret = response.get_json()

    # Server settings
    server_address = ('127.0.0.1', 3001)
    httpd = HTTPServer(server_address, ServerHandler)
    print('running server...')
    httpd.serve_forever()

run()

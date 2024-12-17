import { StyleSheet } from '@react-pdf/renderer';

export const pdfStyles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    padding: 30,
    fontFamily: 'Helvetica'
  },
  logo: {
    marginBottom: 20,
    maxHeight: 100,
  },
  logoImage: {
    objectFit: 'contain',
    maxWidth: 200,
    maxHeight: 100,
  },
  header: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    paddingBottom: 10
  },
  title: {
    fontSize: 24,
    marginBottom: 10
  },
  table: {
    width: 'auto',
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#eee',
    marginVertical: 10
  },
  tableRow: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  tableHeader: {
    backgroundColor: '#f8f9fa'
  },
  tableCell: {
    width: '25%',
    padding: 5,
    fontSize: 10
  },
  summary: {
    marginTop: 20,
    alignItems: 'flex-end'
  },
  text: {
    fontSize: 10,
    marginVertical: 3
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 8,
    color: '#666',
  }
});